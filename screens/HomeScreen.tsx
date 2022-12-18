import { StyleSheet, View, SafeAreaView, StatusBar, Image } from "react-native";
import React from "react";

import tw from "twrnc";
import NavOptions from "../components/Navigation/NavOptions";

import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";

import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";
import NavFavorite from "../components/Navigation/NavFavorite";

const HomeScreen = () => {
  const dispatch = useDispatch();

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
        <GooglePlacesAutocomplete
          placeholder="Where from..."
          enablePoweredByContainer={false}
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          minLength={2}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details?.geometry.location,
                description: data?.description,
              })
            );
            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
        />
        <NavOptions />
        <NavFavorite />
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
