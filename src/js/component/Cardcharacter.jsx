import React,{useContext} from "react";
import { Link } from "react-router-dom";
import "../../styles/card.css"
import { Context } from "../store/appContext";


const Cardcharacter = ({person}) => {
    const {store,actions} = useContext(Context)
    return (
        <div className="card ">
            <img src={`https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg`} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{person.properties.name}</h5>
                    <p className="card-text mb-0">Gender: {person.properties.gender}</p>
                    <p className="card-text mb-0">Eye color: {person.properties.eye_color}</p>
                    <p className="card-text">Hair color: {person.properties.hair_color}</p>
                    <div className="footer-card d-flex justify-content-between">
                    <Link to={`/character/${person.uid}`} className="btn btn-outline-primary">Learn more!</Link>
                    <button onClick={()=>actions.addFavorites(person)} className="btn btn-outline-warning"><i className="fa-regular fa-heart"></i></button>
                    </div>
                </div>
        </div>
    )
}

export default Cardcharacter