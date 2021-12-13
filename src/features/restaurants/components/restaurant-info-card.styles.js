import styled from "styled-components/native";

import { View, Image } from "react-native";
import { Card, Paragraph } from "react-native-paper";

export const RestaurantCard = styled(Card)`
	background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantCardCover = styled(Card.Cover)`
	padding: ${(props) => props.theme.space[3]};
	background-color: ${(props) => props.theme.colors.bg.primary};
`;

export const RestaurantCardContent = styled(Card.Content)``;

export const Address = styled(Paragraph)`
	font-family: ${(props) => props.theme.fonts.body};
	font-size: ${(props) => props.theme.fontSizes.caption};
	color: ${(props) => props.theme.colors.text.secondary};
`;

export const Rating = styled(View)`
	flex-direction: row;
	padding-top: ${(props) => props.theme.space[1]};
	padding-bottom: ${(props) => props.theme.space[1]};
`;

export const SectionEnd = styled(View)`
	flex: 1;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
`;
export const Section = styled(View)`
	flex-direction: row;
	align-items: center;
`;

export const Icon = styled(Image)`
	width: 20px;
	height: 20px;
`;
