import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyDAEzJmhcxuURoyrh5uTlqbvvgPF2SI9qQ',
            authDomain: 'manager-dd4d1.firebaseapp.com',
            databaseURL: 'https://manager-dd4d1.firebaseio.com',
            projectId: 'manager-dd4d1',
            storageBucket: 'manager-dd4d1.appspot.com',
            messagingSenderId: '744895281389'
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;