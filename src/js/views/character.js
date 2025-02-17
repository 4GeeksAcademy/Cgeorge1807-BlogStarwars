import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";
import "../../styles/character.css";


const Character = () => {
    const { store, actions } = useContext(Context)
    const { idCharacter } = useParams()
    const [infoCharacter, setinfoCharacter] = useState(null)

    const getInfoCharacter = async () => {
        try {
            const response = await fetch(store.urlBase + "people/" + idCharacter)
            const data = await response.json()
            if (response.ok) {
                setinfoCharacter(data.result)
            }
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        getInfoCharacter(idCharacter)
    }, [])

    return (
        <div className="container pt-4">
            <div className="row" >
                <div className="col-12 col-md-6">
                    <img src={`https://starwars-visualguide.com/assets/img/characters/${infoCharacter?.uid}.jpg`} />
                </div>
                <div className="col-12 col-md-6">
                    <h1 className="text-center">{infoCharacter?.properties.name}</h1>
                    <p className="text-center pt-2" >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima impedit voluptas doloremque aspernatur pariatur laudantium, temporibus voluptatem nobis velit amet at dicta cum labore quibusdam harum repellat vitae est!
                    </p>
                </div>

            </div>
            <div className="row border-top color text-center mt-5 pt-4">
                <div className="col-12 col-md-2">
                    <h5 >Name</h5>
                    <p>{infoCharacter?.properties.name}</p>
                </div>
                <div className="col-12 col-md-2">
                    <h5 >Birth Year</h5>
                    <p>{infoCharacter?.properties.birth_year}</p>
                </div>
                <div className="col-12 col-md-2">
                    <h5>Gender</h5>
                    <p>{infoCharacter?.properties.gender}</p>
                </div>
                <div className="col-12 col-md-2">
                    <h5>Height</h5>
                    <p>{infoCharacter?.properties.height}</p>
                </div>
                <div className="col-12 col-md-2">
                    <h5>Skin Color</h5>
                    <p>{infoCharacter?.properties.skin_color}</p>
                </div>
                <div className="col-12 col-md-2">
                    <h5>Eye Color</h5>
                    <p>{infoCharacter?.properties.eye_color}</p>
                </div>

            </div>
        </div>

        // <div>Character {infoCharacter?.properties.name}</div>

    )
}

export default Character