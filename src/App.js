import React, {Component} from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';

import configureStore from './redux/configureStore';
import signUp from "./pages/signUp";

//const store = configureStore();
class App extends Component {
    state = {
        email: '',
        fullName: '',
    };
    signIn = (event) => {
        debugger
    };

    render() {
        return (
            <Provider>
                <div className="App">
                    <Switch>
                        {/*<Route exact path="/" component={signUp} />*/}
                        {/*<ProtectedRoute />*/}
                    </Switch>
                </div>
            </Provider>
                //<SignIn onFormSubmit={this.props.signIn}></SignIn>
        )
    }
}

export default App;
