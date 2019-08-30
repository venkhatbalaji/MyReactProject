import React from 'react';
import {Layout, Header, Navigation, Drawer, Footer} from 'react-mdl';
import Main from './Components/Main';
import { Link } from 'react-router-dom';
import './App.css';
function App() {
  return (
   <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="My Profile" scroll>
            <Navigation>
                <Link to="/">My Profile</Link>
                <Link to="/Project">My Projects</Link>
            </Navigation>
        </Header>
        <Drawer title="My Profile">
            <Navigation>
                <Link to="/Project">My Projects</Link>
            </Navigation>
        </Drawer>        
            <Main></Main>
    </Layout>
</div>
  );
}

export default App;
