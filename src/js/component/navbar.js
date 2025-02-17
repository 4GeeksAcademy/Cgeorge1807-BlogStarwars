import React,{useContext} from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const {store, actions} = useContext(Context)
    return (
        <nav className="navbar navbar-light bg-light mb-3">
            <Link to="/">
                <span className="navbar-brand ms-5 h1"><img className="logo" src="https://logos-world.net/wp-content/uploads/2020/11/Star-Wars-Logo.png" /></span>
            </Link>
            <div className="ml-auto me-5">
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuClickable" data-bs-toggle="dropdown" data-bs-auto-close="false" aria-expanded="false">
                        Favorites <i className="fa-regular fa-heart p-2"></i>{store.favorites.length}
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuClickable">
                        {
                            store.favorites.map((item)=>{
                                return(
                                    <li className="p-2 d-flex justify-content-between align-self-center" key={item._id}>
                                        {item.properties.name}
                                        <i onClick={()=>actions.deleteFavorite(item._id)} className="fa-solid fa-trash me-2 align-self-center"></i>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
};
