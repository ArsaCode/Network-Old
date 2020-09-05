import React from 'react'

export function HeaderButton(props) {
  return <button className="btn btn-primary btn-lg mx-1 text-white mt-3">{props.buttonName}</button>
}

export function Header() {

  return <div className="row">
    <div className="col">
    <header>
      <div className="jumbotron text-center mb-0">
      <h1 className="display-4">Welcome to CS50w Network !</h1>
      <p className="lead">This is a social network, made for CS50w by Arsalan Ghassemi.</p>
      <hr className="my-4"></hr>
      <p>It uses Django and ReactJS.</p>
      <p className="lead">
        <HeaderButton buttonName="Login" /> 
        <HeaderButton buttonName="Register" /> 
        <HeaderButton buttonName="All Posts" />
        <HeaderButton buttonName="Followings" /> 
        <HeaderButton buttonName="Logout" /> 
      </p>
      </div>
      </header>
    </div>
  </div>
}

export function Footer() {
  return <div className="row">
    <div className="col">
    <footer className="page-footer font-small bg-secondary">
    <div className="footer-copyright text-center py-3 mt-4">© 2020 Copyright :
      <a href="https://www.arsadevs.com/"> Arsalan Ghassemi</a>
    </div>
  </footer>
    </div>
  </div>
}