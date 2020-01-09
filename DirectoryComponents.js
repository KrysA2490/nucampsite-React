import React, { Component } from 'react';
//All custom components in React course will go in the components folder.
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap'
import CampsiteInfo from './CampsiteInfoComponent'

//new Class component
//child class from a parent class. 
class Directory extends Component {
    //class component with constructor method must have argument "props"
    constructor(props){
       super(props);
       //state is special React property - always need to hold an object.
       this.state ={
           //will keep track of whatever campsite is selected by user
           selectedCampsite: null
       };

        }  
        onCampsiteSelect(campsite){
            this.setState({selectedCampsite: campsite});
        }
     
                        
    //every React component must return a React element
    render(){
        const directory = this.props.campsites.map(campsite=> {
                //this return is for arrow function not component
                return(
                    <div key={campsite.id} className="col-md-5 m-1">
                <Card onClick={() => this.onCampsiteSelect(campsite)}>               
                    <CardImg width="100%" src={campsite.image} alt={campsite.name}/>
                     <CardImgOverlay>
                         <CardTitle>{campsite.name} </CardTitle>
                    </CardImgOverlay>
                </Card> 
                    </div>
                    )
                        });
        return(
            <div className="container">
                <div className="row">
                    {directory}
                </div>
                <CampsiteInfo campsite={this.state.selectedCampsite}/> 
                {/* <CampsiteInfo comments={this.state.comments} */}
                
            </div>
        );
    }
};


export default Directory;








             {/*} COMMENTED out INSTEAD of DELETED
                <div className="row">
                    <div className="col-md-5 m-1">
                        {this.renderSelectedCampsite(this.state.selectedCampsite)}
                    </div>
                </div>
            */}
            

            { /*COMMENTED out INSTEAD of DELETED
                <Card onClick={() => this.onCampsiteSelect(campsite)}>               
                    <CardImg width="100%" src={campsite.image} alt={campsite.name}/>
                     <CardImgOverlay>
                         <CardTitle>{campsite.name} </CardTitle>
                    </CardImgOverlay>
                </Card>    
                */}

                 // renderSelectedCampsite(campsite){
        //     if(campsite){
        //         return(
        //             <div/>
        //         );
        //     }
        //     return <div />;
        // }