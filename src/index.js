import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import './index.css';
import './animate.css';
import Async from 'react-code-splitting';
import registerServiceWorker from './registerServiceWorker';
import Item from './views/item';
import workshopItem from './views/workshopItem';
import Schedule from './abacus18_schedule.pdf';
//const Item = () => <Async load={import('./views/item')}/>

//All components are async'ly loaded
//import Home from './views/home';
const Home = () => <Async load={import('./views/home')}/>
//import Events from './views/events';
const Events = () => <Async load={import('./views/events')}/>
//import TechEvents from './views/techEvents';
const TechEvents = () => <Async load={import('./views/techEvents')}/>
//import GeneralEvents from './views/generalEvents';
const GeneralEvents = () => <Async load={import('./views/generalEvents')}/>
//import OnlineEvents from './views/onlineEvents/index';
const OnlineEvents = () => <Async load={import('./views/onlineEvents/index')}/>
//import NightEvents from './views/nightEvents/index';
const NightEvents = () => <Async load={import('./views/nightEvents/index')}/>
//import Workshops from './views/workshops';
const Workshops = () => <Async load={import('./views/workshops')}/>
//import SA from './views/studentAmbassador';
const SA = () => <Async load={import('./views/studentAmbassador')}/>
//import Register from './views/register';
const Register = () => <Async load={import('./views/register')}/>
//import Register from './views/spiritxtreme';
const SpriteXtreme = () => <Async load={import('./views/spritextreme')}/>

const NotFound = () => <Async load={import('./views/404/index')}/>


ReactDOM.render(
    <Router>
    <div>
        <Switch>
            <Route exact path="/" component={ Home }/>
            {/*<Route exact path="/events" component={ Events }/>
            <Route exact path="/workshops" component={ Workshops }/>
            <Route path="/workshops/:name" component={ workshopItem }/>
            <Route path="/sa" component={ SA }/>
            <Route path="/register" component={ Register }/>
            <Route exact path="/events/tech" component={ TechEvents }/>
            <Route exact path="/events/general" component={ GeneralEvents }/>
            <Route exact path="/events/online" component={ OnlineEvents }/>
            <Route exact path="/events/night" component={ NightEvents }/>
            <Route exact path="/events/spritextreme" component={ SpriteXtreme }/>
            <Route path="/events/:name" component={ Item }/>
<Route path="/schedule" component={Schedule}/>*/}
            <Route component={NotFound}/>
        </Switch>
    </div>
</Router>
, document.getElementById('root'));
registerServiceWorker();
