import firebase from 'firebase';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { View } from 'react-native';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'IzaSyB8xhd40UupviL7BrRmaflZnCmpO-zJWKk',
      authDomain: 'manager-d0741.firebaseapp.com',
      databaseURL: 'https://manager-d0741.firebaseio.com',
      storageBucket: 'manager-d0741.appspot.com',
      messagingSenderId: '949714254853'
    });
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <View>
          <LoginForm />
        </View>
      </Provider>
    );
  }
}

export default App;
