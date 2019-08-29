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
                            <h1>Full Stack Web Developer</h1>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default LandingPage;