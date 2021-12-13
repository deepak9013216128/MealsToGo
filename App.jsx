import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";
import { Text, View } from "react-native";
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

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";

import { RestaurentsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { theme } from "./src/infrastructure/theme/index";

import { RestaurantsProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/locations/locations.context";

const TAB_ICONS = {
	Restaurants: "restaurant",
	Map: "map",
	Settings: "settings",
};

const createScreenOptions = ({ route }) => {
	const iconName = TAB_ICONS[route.name];
	return {
		tabBarIcon: ({ color, size }) => {
			return <Ionicons name={iconName} size={size} color={color} />;
		},
		tabBarActiveTintColor: "tomato",
		tabBarInactiveTintColor: "gray",
	};
};

function MapScreen() {
	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Text>Map!</Text>
		</View>
	);
}

function SettingsScreen() {
	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Text>Settings!</Text>
		</View>
	);
}

const Tab = createBottomTabNavigator();

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
						<NavigationContainer>
							<Tab.Navigator screenOptions={createScreenOptions}>
								<Tab.Screen name="Restaurants" component={RestaurentsScreen} />
								<Tab.Screen name="Map" component={MapScreen} />
								<Tab.Screen name="Settings" component={SettingsScreen} />
							</Tab.Navigator>
						</NavigationContainer>
					</RestaurantsProvider>
				</LocationContextProvider>
			</ThemeProvider>
			<ExpoStatusBar style="auto" />
		</>
	);
}
