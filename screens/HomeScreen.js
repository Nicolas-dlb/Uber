import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/navOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_API_KEY } from "@env";

const HomeScreen = () => {
	return (
		<SafeAreaView style={tw`bg-white h-full`}>
			<View style={tw`p-5`}>
				<Image
					style={{
						width: 100,
						height: 100,
						resizeMode: "contain",
					}}
					source={{
						uri: "https://links.papareact.com/gzs",
					}}
				/>

				<GooglePlacesAutocomplete
					placeholder="Where From?"
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
					query={{
						key: GOOGLE_MAPS_API_KEY,
						language: "en",
					}}
				/>
				<NavOptions />
			</View>
		</SafeAreaView>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	text: {
		color: "blue",
	},
});
