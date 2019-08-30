import React ,{Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component{
    render(){
        return(
            <div style={{width:'100%', margin:'auto'}}>
                <Grid className="Landing-Grid">
                    <Cell col={12}>
                        <img
                            src="https://cdn.iconscout.com/icon/free/png-256/avatar-380-456332.png"
                            alt="Avatar"
                            className="avatar-img"
                         />
                        <div className="banner-text">
                            <h1>Venkhat Balaji</h1>
                            <hr/>
                            <p>Full Stack Web Developer
                                C# | Python | React | MSSQL</p>
                            <div className="social-mediaIcon">
                                <a href="https://www.linkedin.com/in/venkhat-balaji-100002129/" rel="noopener noreferrer" target="_blank" >
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>
                                <a href="https://github.com/venkhatbalaji" rel="noopener noreferrer" target="_blank" >
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                            </div>
                        </div>                        
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default LandingPage;