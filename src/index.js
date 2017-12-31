import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import './index.css';
import './animate.css';
import Home from './views/home';
import Events from './views/events';
import TechEvents from './views/techEvents';
import GeneralEvents from './views/generalEvents';
import Item from './views/item';
import registerServiceWorker from './registerServiceWorker';
import Workshops from './views/workshops';
import SA from './views/studentAmbassador';
import Register from './views/register';

ReactDOM.render(
    <Router>
    <div>
        <Switch>
            <Route exact path="/" component={ Home }/>
            <Route exact path="/events" component={ Events }/>
            <Route path="/workshops" component={ Workshops }/>
            <Route path="/sa" component={ SA }/>
            <Route path="/register" component={ Register }/>
            <Route exact path="/events/tech" component={ TechEvents }/>
            <Route exact path="/events/general" component={ GeneralEvents }/>
            <Route path="/events/:name" component={ Item }/>
        </Switch>
    </div>
</Router>
, document.getElementById('root'));
registerServiceWorker();
