import React , {useContext} from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import Cardcharacter from "../component/Cardcharacter.jsx";
import Cardplanet from "../component/Cardplanet.jsx";
import Cardvehicles from "../component/Cardvehicles.jsx";

export const Home = () => {
	const {store, actions} = useContext(Context)

	return(
		<div className="container">
			<div className="row mt-5">
				<div className="col-12">
					<h1 className="ps-2">Characters</h1>
					<div className="container mt-3 scroll-character">
						{
							store.character.map((item)=>{
								return(
									<Cardcharacter person={item} key={item.uid}/>
								)
							})
							
						}
					</div>
				</div>
			

				<div className="col-12 mt-4" >
					
					<h1 className="mt-3 ms-3">Planets</h1>
					<div className="container mt-3 scroll-character">
						{
							store.planets.map((item)=>{
								return(
									<Cardplanet planet={item} key={item.uid}/>
								)
							})
							
						}
					</div>

				</div>

				<div className="col-12 mt-4">
					
					<h1 className="mt-3 ms-3">Vehicles</h1>
					<div className="container mt-3 scroll-character">
						{
							store.vehicles.map((item)=>{
								return(
									<Cardvehicles vehicles={item} key={item.uid}/>
								)
							})
							
						}
					</div>

				</div>
			</div>
		</div>
	)
};
