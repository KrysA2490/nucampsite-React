import React from 'react';
//All custom components in React course will go in the components folder.
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap'

function RenderDirectoryItem({campsite, onClick}) {

    return(
        <Card onClick={() => onClick(campsite.id)}>         
        <CardImg width="100%" src={campsite.image} alt={campsite.name}/>
         <CardImgOverlay>
             <CardTitle>{campsite.name} </CardTitle>
        </CardImgOverlay>
    </Card> 
    );
}

function Directory(props){

        const directory = props.campsites.map(campsite=> {
                return(
                    <div key={campsite.id} className="col-md-5 m-1">
                        <RenderDirectoryItem campsite= {campsite} onClick={props.onClick}/>
                    </div>
                    )
                        });
        return(
            <div className="container">
                <div className="row">
                    {directory}
                </div>
               
            </div>
        );
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