import React,{useContext} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/card.css"


const Cardvehicles = ({vehicles}) => {
    const {store,actions}=useContext(Context)
    return(
        <div className="card ">
            <img src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicles.uid}.jpg`} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{vehicles.properties.name}</h5>
                    <p className="card-text mb-0">Model: {vehicles.properties.model}</p>
                    <p className="card-text mb-0">Length: {vehicles.properties.length}</p>
                    <p className="card-text">Capacity: {vehicles.properties.passengers}</p>
                    <div className="footer-card d-flex justify-content-between">
                    <Link to={`/vehicles/${vehicles.uid}`} className="btn btn-outline-primary">Learn more!</Link>
                    <button onClick={()=>actions.addFavorites(vehicles)} className="btn btn-outline-warning"><i className="fa-regular fa-heart"></i></button>
                    </div>
                </div>
        </div>
    )
}

export default Cardvehicles