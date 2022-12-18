import { createSlice } from "@reduxjs/toolkit";
import { Point } from "react-native-maps";

const initialState = {
  origin: null,
  destination: null,
  travelTimeInformation: null,
};

type stateProps = {
  location: Point | undefined;
  description: string;
};

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state: any, action: any) => {
      state.origin = action.payload;
    },
    setDestination: (state: { destination: any }, action: { payload: any }) => {
      state.destination = action.payload;
    },
    setTravelTimeInformation: (
      state: { travelTimeInformation: any },
      action: { payload: any }
    ) => {
      state.travelTimeInformation = action.payload;
    },
  },
});

export const { setOrigin, setDestination, setTravelTimeInformation } =
  navSlice.actions;

export const selectOrigin = (state: any) => state.nav.origin;
export const selectDestination = (state: any) => state.nav.destination;
export const selectTravelTimeInformation = (state: any) =>
  state.nav.travelTimeInformation;

export default navSlice.reducer;
