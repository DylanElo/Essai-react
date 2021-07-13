import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import About from './pages/About';
import Home from "./pages/Home"
import NotFound from './pages/NotFound';
import Logo from './components/Logo';
import News from './pages/News';

const App = () => {
    return (
        <BrowserRouter>
        <Navigation/>
        <Logo />
            <Switch>
                <Route path="/" exact component = {Home} />
                <Route path="/about" exact component = { About} />
                <Route path="/news" exact component = {News} v/>
                <Route component = { NotFound}/>
            </Switch>
        </BrowserRouter>
    );
};

export default App;