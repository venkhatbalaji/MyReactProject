import React ,{Component} from 'react';
import { Tabs, Tab, Card, CardTitle, CardText, CardActions, Button, CardMenu } from 'react-mdl';

class Project extends Component{  
    constructor(props){
        super(props);
        this.state = {activeTab:0};
    }
    toggleCategory(){
        if(this.state.activeTab === 0){
            return(
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color:'white', background:'linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6)', height:'175px'}}>C#(DontNet)</CardTitle>
                    <CardText>This is About C#</CardText>
                    <CardActions>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color:'black'}}>

                    </CardMenu>
                </Card>
            )
        }else if(this.state.activeTab === 1){
            return(
                 <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color:'white', background:'linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6)', height:'175px'}}>C#(DontNet)</CardTitle>
                    <CardText>This is About Python</CardText>
                    <CardActions>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color:'black'}}>

                    </CardMenu>
                </Card>
            )
        }else if(this.state.activeTab === 2){
            return(
                 <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color:'white', background:'linear-gradient(to right, #667db6, #0082c8, #0082c8, #667db6)', height:'175px'}}>C#(DontNet)</CardTitle>
                    <CardText>This is About React</CardText>
                    <CardActions>
                        <Button colored>Github</Button>
                        <Button colored>CodePen</Button>
                        <Button colored>LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color:'black'}}>

                    </CardMenu>
                </Card>
            )
        }

    }
    render() {        
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId => this.setState({activeTab: tabId}))} ripple>
                    <Tab>C#(Dontnet)</Tab>
                    <Tab>Python</Tab>
                    <Tab>React</Tab>
                </Tabs>
                <section className="toggle-Categories">
                    {this.toggleCategory()}
                </section>
            </div>
        );
    }
}
export default Project;