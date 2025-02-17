import React,{useContext,useState,useEffect} from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";
import "../../styles/vehicle.css"


const Vehicles = () => {
    const {store,actions} = useContext(Context)
    const {idVehicle} = useParams()
    const [infoVehicle,setinfoVehicle] = useState(null)

    const getVehicle = async () => {
        try{
            const response = await fetch(store.urlBase+"vehicles/"+idVehicle)
            const data = await response.json()
            if(response.ok){
                setinfoVehicle(data.result)
            }
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getVehicle(idVehicle)
    })
  
    return(
        <div className="container pt-4">
            <div className="row" >
                <div className="col-12 col-md-6">
                    <img className="image" src={`https://starwars-visualguide.com/assets/img/vehicles/${infoVehicle?.uid}.jpg`} />
                </div>
                <div className="col-12 col-md-6">
                    <h1 className="text-center">{infoVehicle?.properties.name}</h1>
                    <p className="text-center pt-2" >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima impedit voluptas doloremque aspernatur pariatur laudantium, temporibus voluptatem nobis velit amet at dicta cum labore quibusdam harum repellat vitae est!
                    </p>
                </div>

            </div>
            <div className="row border-top color text-center mt-5 pt-4">
                <div className="col-12 col-md-2">
                    <h5 >Name</h5>
                    <p>{infoVehicle?.properties.name}</p>
                </div>
                <div className="col-12 col-md-2">
                    <h5 >Model</h5>
                    <p>{infoVehicle?.properties.model}</p>
                </div>
                <div className="col-12 col-md-2">
                    <h5>Capacity</h5>
                    <p>{infoVehicle?.properties.passengers}</p>
                </div>
                <div className="col-12 col-md-2">
                    <h5>Length</h5>
                    <p>{infoVehicle?.properties.length}</p>
                </div>
                <div className="col-12 col-md-2">
                    <h5>Cost</h5>
                    <p>{infoVehicle?.properties.cost_in_credits}</p>
                </div>
                <div className="col-12 col-md-2">
                    <h5>Class</h5>
                    <p>{infoVehicle?.properties.vehicle_class}</p>
                </div>

            </div>
        </div>

    )
}

export default Vehicles