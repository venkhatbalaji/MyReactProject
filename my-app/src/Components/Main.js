import React from 'react';
import { Switch, Route} from 'react-router-dom';
import LandingPage from './LandingPage';
import About from './About';
import ContactUs from './ContactUs';
import Project from './Project';

const Main = () => {
   return( <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/AboutUs" component={About} />
        <Route path="/Project" component={Project} />
        <Route path="/Contact-Us" component={ContactUs} />
    </Switch >
   );
}

export default Main;