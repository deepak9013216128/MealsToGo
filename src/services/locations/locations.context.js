import React, { createContext, useEffect, useState } from "react";

import { locationRequest, locationTransform } from "./locations.services";

export const LocationsContext = createContext();

export const LocationContextProvider = ({ children }) => {
	const [keyword, setKeyword] = useState("san francisco");
	const [location, setLocation] = useState(null);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const onSearch = (searchKeyword) => {
		setKeyword(searchKeyword.trim());
		setIsLoading(true);
	};

	useEffect(() => {
		if (!keyword) {
			return;
		}
		locationRequest(keyword.toLowerCase())
			.then(locationTransform)
			.then((res) => {
				setLocation(res);
			})
			.catch((err) => {
				console.log(err);
				setError(err);
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, [keyword]);

	return (
		<LocationsContext.Provider
			value={{
				location,
				keyword,
				isLoading,
				error,
				search: onSearch,
			}}
		>
			{children}
		</LocationsContext.Provider>
	);
};
