const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			peoples: [],
			planets: [],
			favorites: [],
			demo: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			loadPeople: async () => {
				const url = "https://swapi.dev/api/people/";
				const response = await fetch(url);
				const data = await response.json();
				//console.log(data);

				setStore({ peoples: data.results });
			},
			loadPlanets: async () => {
				const url = "https://swapi.dev/api/planets/";
				const response = await fetch(url);
				const data = await response.json();
				//console.log(data);

				setStore({ planets: data.results });
			}
		}
	};
};

export default getState;
