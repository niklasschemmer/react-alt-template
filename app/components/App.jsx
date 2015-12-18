import React from "react";
import AppStore from "../stores/AppStore";
import AppActions from "../actions/AppActions";

import connectToStores from 'alt/utils/connectToStores';

class App extends React.Component {

    static getStores() {
        return [AppStore];
    }

    static getPropsFromStores() {
        return AppStore.getState();
    }

    changeMessage = () => {
        AppActions.changeMessage('World');
    };

    render() {
        return (
            <div>
                <h1>{this.props.message}</h1>
                <button onClick={this.changeMessage}>Change</button>
            </div>
        );
    }

}

export default connectToStores(App);