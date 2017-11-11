import React, {Component} from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import * as actions from '../actions';

import Header from './Header';
import Landing from './Landing';
const Dashboard = () => (<h2>Dashboard</h2>);
const SurveyNew = () => (<h2>SurveyNew</h2>);

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Route exact path="/" component={Landing}/>
                        <Route exact path="/surveys" component={Dashboard}/>
                        <Route path="/surveys/new" component={SurveyNew}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default connect(null, mapDispatchToProps)(App);