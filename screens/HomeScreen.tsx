import { StyleSheet, View, SafeAreaView, StatusBar, Image } from "react-native";
import React from "react";

import tw from "twrnc";
import NavOptions from "../components/Navigation/NavOptions";

const HomeScreen = () => {
  return (
    <SafeAreaView style={[styles.container, tw`bg-white h-full`]}>
      <View style={tw`p-5`}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/1280px-Uber_logo_2018.svg.png",
          }}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
