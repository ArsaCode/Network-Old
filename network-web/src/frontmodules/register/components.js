import React from 'react'


export function RegisterView() {
    return <><h3 className="text-white pt-3">
            Register
        <div className="mb-3">
        <small className="text-muted">Register and join us today.</small>
        </div>
        </h3>
        <div className="container pb-3">
            <div className="row">
            <div className="col text-primary">
            <form className="registerform">
            <div className="form-group">
                <label htmlFor="usernameInput">Username</label>
                <input name="username" type="email" className="form-control" id="usernameInput"></input>
            </div>
            <div className="form-group">
                <label htmlFor="emailInput">E-mail address</label>
                <input name="email" type="email" className="form-control" id="emailInput" aria-describedby="emailHelp"></input>
                <small id="emailHelp" className="form-text text-muted">We'll never share your informations with anyone else.</small>
            </div>
            <div className="form-group">
                <label htmlFor="passwordInput">Password</label>
                <input name="password" type="password" className="form-control" id="passwordInput"></input>
            </div>
            <div className="form-group">
                <label htmlFor="confirmationInput">Password confirmation</label>
                <input name="confirmation" type="password" className="form-control" id="confirmationInput"></input>
            </div>
            <button type="submit" className="btn btn-primary">Register</button>
            </form>
            </div>
            </div>
        </div></>
}