import React from "react";
import { Platform } from "react-native";
import styled from "styled-components/native";
import WebView from "react-native-webview";

import { Text } from "../../components/typography/text.component";

const Item = styled.View`
	padding: 10px;
	max-width: 120px;
	align-items: center;
`;
const CompactImage = styled.Image`
	width: 120px;
	height: 100px;
	border-radius: 10px;
`;
const CompactWebView = styled(WebView)`
	width: 120px;
	height: 100px;
	border-radius: 10px;
`;

const isAndroid = Platform.OS === "android";
export const CompactRestaurantInfo = ({ restaurant }) => {
	const Image = isAndroid ? CompactWebView : CompactImage;
	return (
		<Item>
			<Image source={{ uri: restaurant.photos[0] }} />
			<Text center variant={"caption"} noOfLine={3}>
				{restaurant.name}
			</Text>
		</Item>
	);
};
