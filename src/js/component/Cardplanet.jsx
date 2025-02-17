import React,{useContext} from "react";
import { Link } from "react-router-dom";
import "../../styles/card.css"
import { Context } from "../store/appContext";


const Cardplanet = ({planet}) => {
    const {store,actions} = useContext(Context)

    return(
        <div className="card ">
            <img src={`https://starwars-visualguide.com/assets/img/planets/${planet.uid==1? Math.floor(Math.random()*10+2):planet.uid}.jpg`} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{planet.properties.name}</h5>
                    <p className="card-text mb-0">Terrain: {planet.properties.terrain}</p>
                    <p className="card-text mb-0">Climate: {planet.properties.climate}</p>
                    <p className="card-text">Gravity: {planet.properties.gravity}</p>
                    <div className="footer-card d-flex justify-content-between ">
                        <Link to={`/planet/${planet.uid}`} className="btn btn-outline-primary">Learn more!</Link>
                        <button onClick={()=>actions.addFavorites(planet)} className="btn btn-outline-warning"><i className="fa-regular fa-heart"></i></button>
                    </div>
                </div>
        </div>
    )
}

export default Cardplanet