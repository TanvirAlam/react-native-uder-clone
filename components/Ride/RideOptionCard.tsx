import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";

import tw from "twrnc";
import { Icon, Image } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";

import { rideOptions } from "../../utils/data-ride-options";

const RideOptionCard = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")}
          style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>Select a ride</Text>
      </View>
      <FlatList
        data={rideOptions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={tw`flex-row justify-between items-center px-10`}
          >
            <Image
              style={{ width: 100, height: 100, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-samibold`}>{item.title}</Text>
              <Text>travel time ...</Text>
            </View>
            <Text style={tw`text-xl`}>99 DKK</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default RideOptionCard;
