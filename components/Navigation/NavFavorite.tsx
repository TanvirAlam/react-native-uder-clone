import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { navFavorites } from "../../utils/data-nav-favorites";

import { Icon } from "@rneui/themed";
import tw from "twrnc";

const NavFavorite = () => {
  return (
    <FlatList
      data={navFavorites}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <View style={tw`bg-gray-200`} />}
      renderItem={({ item }) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
          <Icon
            style={tw`mr-4 rounded-full bg-gray-300 p-3 bg-green-700`}
            name={item.icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
            <Text style={tw`font-semibold text-lg`}>{item.location}</Text>
            <Text style={tw`text-gray-500`}>{item.destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavorite;

const styles = StyleSheet.create({});
