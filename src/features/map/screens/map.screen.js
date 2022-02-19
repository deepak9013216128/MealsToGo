import React, { useContext, useEffect, useState } from "react";
import MapView from "react-native-maps";
import styled from "styled-components/native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Search } from "../components/search.component";

import { LocationsContext } from "../../../services/locations/locations.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { View, Text } from "react-native";
import { MapCallout } from "../components/map-callout.component";

const Map = styled(MapView)`
	height: 100%;
	width: 100%;
`;

export const MapScreen = ({ navigation }) => {
	const { location } = useContext(LocationsContext);
	const { restaurants = [] } = useContext(RestaurantsContext);
	const [latDelta, setLatDelta] = useState(0);

	useEffect(() => {
		const { viewport } = location;
		const northeastLat = viewport.northeast.lat;
		const southwestLat = viewport.southwest.lat;

		const latDelta = northeastLat - southwestLat;
		setLatDelta(latDelta);
	}, [location]);

	const { lat, lng } = location;
	return (
		<SafeArea>
			<Search />
			<Map
				region={{
					latitude: lat,
					longitude: lng,
					latitudeDelta: latDelta,
					longitudeDelta: 0.02,
				}}
			>
				{restaurants.map((restaurant) => (
					<MapView.Marker
						key={restaurant.name}
						title={restaurant.name}
						coordinate={{
							latitude: restaurant.geometry.location.lat,
							longitude: restaurant.geometry.location.lng,
						}}
					>
						<MapView.Callout
							onPress={() =>
								navigation.navigate("RestaurantDetail", { restaurant })
							}
						>
							<MapCallout restaurant={restaurant} />
						</MapView.Callout>
					</MapView.Marker>
				))}
			</Map>
		</SafeArea>
	);
};
