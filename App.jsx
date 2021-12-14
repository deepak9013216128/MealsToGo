import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import {
	useFonts as useOswald,
	Oswald_400Regular,
	Oswald_700Bold,
} from "@expo-google-fonts/oswald";
import {
	useFonts as useLato,
	Lato_400Regular,
	Lato_700Bold,
} from "@expo-google-fonts/lato";

import { RestaurantsProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/locations/locations.context";

import { Navigation } from "./src/infrastructure/navigation/index";
import { theme } from "./src/infrastructure/theme/index";

export default function App() {
	let [oswaldLoaded] = useOswald({
		Oswald_400Regular,
		Oswald_700Bold,
	});
	let [latoLoaded] = useLato({
		Lato_400Regular,
		Lato_700Bold,
	});

	if (!oswaldLoaded || !latoLoaded) return null;

	return (
		<>
			<ThemeProvider theme={theme}>
				<LocationContextProvider>
					<RestaurantsProvider>
						<Navigation />
					</RestaurantsProvider>
				</LocationContextProvider>
			</ThemeProvider>
			<ExpoStatusBar style="auto" />
		</>
	);
}
