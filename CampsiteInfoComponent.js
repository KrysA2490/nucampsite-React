import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap'


//CampsiteInfo is an instance of Component
class CampsiteInfo extends Component {
    constructor(props){
       super(props)
       this.state={}
    }
    //Add a method to show each campsite
    //I noticed that the argument does not need to be campsite. It can be another word ie camper as long as it matches with that is referenced in the div.

    renderCampsite(campsite){
        //write a return statement for component
        return(
            <div className="col-md-5 m-1">
                 <Card>
                            <CardImg top src={campsite.image} alt={campsite.name}/>
                            <CardBody>
                                <CardTitle>{campsite.name}</CardTitle>
                                <CardText>{campsite.description}</CardText>
                            </CardBody>
                    </Card>
            </div>
        )
    }

    //Add a method to show comments
   renderComments(comments){
    if(comments){
        return(
            <div className="col-md-5 m-1"> 
                {<h4> Comments </h4> }
                  {
                    comments.map(comment => <div key={comment.id}><p>{comment.text} <br></br> --- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} </p></div>)
                    }
            </div>
        )
    }
    return <div/>
}
    render(){
        if(this.props.campsite){
                return(
                    <div className="row">
                      {/* call the render campsite and render comments method here */}
                        {this.renderCampsite(this.props.campsite)};
                        {this.renderComments(this.props.campsite.comments)}; 
                     </div>
                     )   
        }
        return <div/>
    }

}

export default CampsiteInfo;