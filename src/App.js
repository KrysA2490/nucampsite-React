import React, { Component } from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import './App.css';

//cpaturing return value of ConfigureStore() from configureStore.js
const store = ConfigureStore();

class App extends Component {
   
       render() {
        return (
          //Wrap everything in App return statement makes redux store avaialable to all connected componenents that are children of app. 
          <Provider store = {store}>
          <BrowserRouter> 
            <div className="App">
               <Main/>
            </div>
          </BrowserRouter>
         </Provider>
          );
        }
}

export default App;
