import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

export default function Header() {
    const isLogged = localStorage.getItem("Token");
    const username = localStorage.getItem("Username");

    const Button = props => {
        return <button className="btn btn-primary btn-lg mx-1 text-white mt-3">{props.buttonName}</button>
    }
    const handleLogout = () => {
        axios.post('http://127.0.0.1:8000/restauth/logout', {}, {
            headers: {
                Authorization: localStorage.getItem("Token")
            }
        })
        .then(res => {
            localStorage.removeItem("Token")
            localStorage.removeItem("Username")
            window.location.href = "/login"
        })
    }
    return <div className="row">
        <div className="col">
        <header>
        <div className="jumbotron text-center mb-0">
        <h1 className="display-4">Welcome to CS50w Network !</h1>
        <p className="lead">This is a social network, made for CS50w by Arsalan Ghassemi.</p>
        <hr className="my-4"></hr>
        <p>It uses Django and ReactJS.</p>
        <p className="lead">
            <Link to="/"><Button buttonName="All Posts" /></Link>
            {!isLogged && <Link to="/login"><Button buttonName="Login" /></Link>}
            {!isLogged && <Link to="/register"><Button buttonName="Register" /></Link>}
            {isLogged && <Link to="/followings"><Button buttonName="Followings" /></Link>} 
            {isLogged && <button onClick={() => handleLogout()} className="btn btn-primary btn-lg mx-1 text-white mt-3">Logout</button>}
        </p>
        <span className="text-primary">{isLogged ? `Hello ${username}, you are logged in.` : "You are not logged in."}</span>
        </div>
        </header>
        </div>
    </div>
}