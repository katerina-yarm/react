import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import { HomeUrl, LoginUrl, SignUpUrl } from './Routes/Routes';

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Switch>
        <Route path={LoginUrl} component={Login} />
        <Route path={SignUpUrl} component={Signup} />
        <Route path={HomeUrl} component={Home} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

