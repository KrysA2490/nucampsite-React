import React, { Component } from 'react';
import Directory from './DirectoryComponents';
import CampsiteInfo from './CampsiteInfoComponent'
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { addComment } from '../redux/ActionCreators';

// We are no longer storing application data in main component state --> redux store. 

//We no longer need imports. We get the state from Redux by setting up mapStatetoProps function. 
//It will take state as argument and return campsites, etc as props. 

const mapStateToProps = state => {
    return{
        campsites: state.campsites,
        comments: state.comments,
        partners: state.partners,
        promotions: state.promotions
    }
}

const mapDispatchToProps ={
    addComment: (campsiteId, rating, author, text) => (addComment(campsiteId, rating, author, text))
}

class Main extends Component {


       render() {
        
        const HomePage = () => {
            return (
                <Home
                campsite = {this.props.campsites.filter(campsite => campsite.featured)[0]}
                promotion={this.props.promotions.filter(promotion => promotion.featured)[0]}
                partner={this.props.partners.filter(partner => partner.featured)[0]}
                />
            );
            }

        const CampsiteWithId = ({match}) => {
            return(
                <CampsiteInfo 
                campsite={this.props.campsites.filter(campsite => campsite.id === +match.params.campsiteId )[0]}
                comments={this.props.comments.filter(comment => comment.campsiteId === +match.params.campsiteId)}
                addComment= {this.props.addComment}
                />
            )
        }
 
        return (
          <div>
               <Header/>
               <Switch> 
                    <Route path ='/home' component={HomePage} />
                    <Route exact path ='/directory' render={() => <Directory campsites={this.props.campsites} />}/>
                   <Route path='/directory/:campsiteId' component ={CampsiteWithId}/>
                   <Route exact path='/contactus' component ={Contact}/>
                   <Route exact path='/aboutus' render ={() => <About partners = {this.props.partners} />} />
                    <Redirect to= '/home'/>
              </Switch>
              <Footer/> 
          </div>
        );
    }
}

//allow Main componenet to take its state from ReduxStore
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
