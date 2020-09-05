import React from 'react'
import {formtoServer} from '../../actions'

export function handleLogin(event) {
  const tryLogin = (response, status) => {
    if (status === 200) {
      console.log(response)
    }
    else {
      console.log(response)
    }
  }
  formtoServer(tryLogin, 'POST', 'restauth/login', event)
}

export function LoginView() {
    return <><h3 className="text-white pt-3">
          Login
        <div className="mb-3">
        <small className="text-muted">Login to your account.</small>
        </div>
        </h3>
        <div className="container pt-3">
          <div className="row">
            <div className="col text-primary">
            <form className="loginform" onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="usernameInput">Username</label>
              <input name="username" type="text" className="form-control" id="usernameInput" aria-describedby="usernameHelp"></input>
              <small id="usernameHelp" className="form-text text-muted">We'll never share your informations with anyone else.</small>
            </div>
            <div className="form-group">
              <label htmlFor="passwordInput">Password</label>
              <input name="password" type="password" className="form-control" id="passwordInput"></input>
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
            </div>
          </div>
        </div></>
  }