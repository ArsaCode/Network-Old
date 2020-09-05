import React from 'react';
import './App.css';

import {AllPostsView} from './frontmodules/allposts';
import {Header, Footer} from './frontmodules/layout';
import {RegisterView} from './frontmodules/register';
import {LoginView} from './frontmodules/login';
import {FollowingsView} from './frontmodules/followings';

function App() {
  return (
    <div className="App">
        <Header />
        <AllPostsView />
        <RegisterView />
        <LoginView />
        <FollowingsView />
        <Footer />
    </div>
  );
}

export default App;
