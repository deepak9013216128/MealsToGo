import React, { useContext } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { ActivityIndicator, Colors } from "react-native-paper";

import { Spacer } from "../../../components/spacer/spacer.componet";
import { SafeArea } from "../../../components/utility/safe-area.component";

import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";
import { Search } from "../components/search.component";

const Loading = styled(ActivityIndicator)`
	margin-left: -25px;
`;
const LoadingContainer = styled.View`
	position: absolute;
	top: 50%;
	left: 50%;
`;

const RestaurentsScreen = ({ navigation }) => {
	const { restaurants, isLoading } = useContext(RestaurantsContext);
	return (
		<SafeArea>
			<LoadingContainer>
				<Loading animating={isLoading} color={Colors.red800} size={"large"} />
			</LoadingContainer>
			<Search />
			<FlatList
				data={restaurants}
				renderItem={({ item }) => (
					<Spacer position={"bottom"} size={"large"}>
						<TouchableOpacity
							onPress={() =>
								navigation.navigate("RestaurantDetail", { restaurant: item })
							}
						>
							<RestaurantInfoCard restaurant={item} />
						</TouchableOpacity>
					</Spacer>
				)}
				keyExtractor={(item) => item.name}
				contentContainerStyle={{ padding: 16 }}
			/>
		</SafeArea>
	);
};

export default RestaurentsScreen;
