import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useState } from "react";

import tw from "twrnc";
import { Icon, Image } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

import { rideOptions } from "../../utils/data-ride-options";
import { selectTravelTimeInformation } from "../../slices/navSlice";
import { useSelector } from "react-redux";

const SURCE_CHARGE_RATE = 1.5;

const RideOptionCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")}
          style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>
          Select a ride - {travelTimeInformation?.distance.text}
        </Text>
      </View>
      <FlatList
        data={rideOptions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={tw`flex-row justify-between items-center px-10 ${
              item.id === selected?.id && "bg-gray-200"
            }`}
          >
            <Image
              style={{ width: 100, height: 100, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold`}>{item.title}</Text>
              <Text>{travelTimeInformation?.duration.text} Travel Time</Text>
            </View>
            <Text style={tw`text-xl`}>
              {new Intl.NumberFormat("en-gb", {
                style: "currency",
                currency: "GBP",
              }).format(
                (travelTimeInformation?.duration.value *
                  SURCE_CHARGE_RATE *
                  multiplier) /
                  100
              )}
            </Text>
          </TouchableOpacity>
        )}
      />
      <View style={tw`items-center justify-center`}>
        <TouchableOpacity
          disabled={!selected}
          style={tw`bg-black ${!selected && "bg-gray-300"}`}
        >
          <Text style={tw`text-center text-white text-xl p-2`}>
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionCard;
