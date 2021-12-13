import React, { useContext, useEffect } from "react";
import { View } from "react-native";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { LocationsContext } from "../../../services/locations/locations.context";

const SearchContainer = styled(View)`
	padding: ${(props) => props.theme.space[3]};
`;
export const Search = ({}) => {
	const { keyword, search } = useContext(LocationsContext);
	const [searchQuery, setSearchQuery] = React.useState(keyword);

	useEffect(() => {
		search(searchQuery);
	}, []);

	const onChangeSearch = (query) => setSearchQuery(query);
	const onSubmitEditing = () => search(searchQuery);
	return (
		<SearchContainer>
			<Searchbar
				placeholder="Search for a location"
				value={searchQuery}
				onChangeText={onChangeSearch}
				onSubmitEditing={onSubmitEditing}
			/>
		</SearchContainer>
	);
};
