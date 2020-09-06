import React from 'react';
import './App.css';

import AllPostsView from './screens/AllPostsView';
import LoginView from './screens/LoginView';
import RegisterView from './screens/RegisterView';
import Header from './components/Header';
import Footer from './components/Footer';
import FollowingsView from './screens/FollowingsView';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={AllPostsView}>
            </Route>
            <Route exact path="/register" component={RegisterView}>
            </Route>
            <Route exact path="/login" component={LoginView}>
            </Route>
            <Route exact path="/followings" component={FollowingsView}>
            </Route>
          </Switch>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
