import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { View } from 'react-native';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyAWT2FY4yUy0btgMgsEbU0bWDsIjhP9Mos',
      authDomain: 'manager-2053e.firebaseapp.com',
      databaseURL: 'https://manager-2053e.firebaseio.com',
      storageBucket: 'manager-2053e.appspot.com',
      messagingSenderId: '1014533511637'
    };
    firebase.initializeApp(config);
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
