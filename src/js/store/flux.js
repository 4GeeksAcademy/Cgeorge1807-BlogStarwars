const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			character: JSON.parse(localStorage.getItem("character")) || [],
			planets: JSON.parse(localStorage.getItem("planets")) || [],
			vehicles:JSON.parse(localStorage.getItem("vehicles")) || [],
			favorites:[],
			urlBase: "https://www.swapi.tech/api/"
		},
		actions: {
			// Use getActions to call a function within a fuction
			getAllCharacter: async () => {
				if (getStore().character.length <= 0){
					try {
						const response = await fetch(getStore().urlBase + "people")
						const data = await response.json()
						for (let i = 0; i < data.results.length; i++) {
							const characterDetail = await fetch(data.results[i].url)
							const dataDetail = await characterDetail.json()
							setStore({
								character: [
									...getStore().character,
									dataDetail.result
								]
							})
							localStorage.setItem("character", JSON.stringify(getStore().character))
						}
					} catch(error) {
						console.log(error)
					}
				}
			},

			getAllPlanets: async () => {
				if(getStore().planets.length <= 0 ){
					try {
						const response = await fetch(getStore().urlBase + "planets")
						const data = await response.json()
						for (let i = 0; i < data.results.length; i++) {
							const planetDetail = await fetch(data.results[i].url)
							const planet = await planetDetail.json()
							setStore({
								planets: [
									...getStore().planets,
									planet.result
								]
							})
						}
						localStorage.setItem("planets", JSON.stringify(getStore().planets))

					} catch(error) {
						console.log(error)
					}
				}
			},

			getAllVehicles: async () => { 
				try{
					const response = await fetch(getStore().urlBase+"vehicles")
					const data = await response.json()
					for (let i=0; i<data.results.length;i++){
						const detailVehicle = await fetch(data.results[i].url)
						const dataVehicle = await detailVehicle.json()
						setStore({
							vehicles:[
								...getStore().vehicles,
								dataVehicle.result
								
							]
						})
						localStorage.setItem("vehicles", JSON.stringify(getStore().vehicles))
					}
				}catch(error){
					console.log(error)
				}
			},

			addFavorites: async (newFavorite) => {
				if(!getStore().favorites.includes(newFavorite)){
					setStore({
						favorites:[
							...getStore().favorites,
							newFavorite

						]
					})
				}
			},

			deleteFavorite: async (id) => {
				const arr = getStore().favorites.filter((item)=>item._id!=id)
				setStore({
					favorites:arr
				})
			}


			//reset the global store

		}
	}
};

export default getState;
