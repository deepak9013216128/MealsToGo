import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, View } from "react-native";

import { RestaurentsScreen } from "../../features/restaurants/screens/restaurants.screen";

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

export const AppNavigator = () => {
	return (
		<NavigationContainer>
			<Tab.Navigator screenOptions={createScreenOptions}>
				<Tab.Screen name="Restaurants" component={RestaurentsScreen} />
				<Tab.Screen name="Map" component={MapScreen} />
				<Tab.Screen name="Settings" component={SettingsScreen} />
			</Tab.Navigator>
		</NavigationContainer>
	);
};
