import React,{Component} from 'react';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component{
async componentWillMount(){


  var firebaseConfig = {
    apiKey: "AIzaSyAIwnYWb5q3mGebTU7G0u_pe_cCFoay50I",
    authDomain: "button-30a4e.firebaseapp.com",
    databaseURL: "https://button-30a4e.firebaseio.com",
    projectId: "button-30a4e",
    storageBucket: "button-30a4e.appspot.com",
    messagingSenderId: "515365477241",
    appId: "1:515365477241:web:050d67f507a5950fcd2da8"
  };
  firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  };

  render(){
    const store=createStore(reducers,{},applyMiddleware(ReduxThunk));
    return(
      <Provider store={store}>
      <Router/>
      </Provider>
    );
  };
};

export default App;
