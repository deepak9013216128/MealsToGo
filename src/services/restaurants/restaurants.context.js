import React, {
	useState,
	useEffect,
	createContext,
	useMemo,
	useContext,
} from "react";
import { LocationsContext } from "../locations/locations.context";

import {
	restauntentRequest,
	restaurantsTransform,
} from "./restauants.services";

export const RestaurantsContext = createContext();

export const RestaurantsProvider = ({ children }) => {
	const [restaurants, setRestaurants] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);
	const { location } = useContext(LocationsContext);

	const retrieveRestaurants = (location) => {
		setIsLoading(true);
		setRestaurants([]);
		setTimeout(() => {
			restauntentRequest(location)
				.then(restaurantsTransform)
				.then((res) => {
					setRestaurants(res);
				})
				.catch((err) => {
					setError(err);
				})
				.finally(() => {
					setIsLoading(false);
				});
		}, 2000);
	};
	useEffect(() => {
		if (location) {
			const locationString = `${location.lat},${location.lng}`;
			retrieveRestaurants(locationString);
		}
	}, [location]);

	return (
		<RestaurantsContext.Provider
			value={{
				restaurants,
				isLoading,
				error,
			}}
		>
			{children}
		</RestaurantsContext.Provider>
	);
};
