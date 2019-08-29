import React from 'react';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './Components/Main';
import { Link } from 'react-router-dom';
import './App.css';
function App() {
  return (
   <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title="Title" scroll>
            <Navigation>
                <Link to="/Project">Project</Link>
                <Link to="/AboutUs">About</Link>
                <Link to="/Contact-Us">Contact Us</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <Link to="/Project">Project</Link>
                <Link to="/AboutUs">About</Link>
                <Link to="/ContactUs">Contact Us</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>
  );
}

export default App;
