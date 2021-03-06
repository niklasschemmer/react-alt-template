import './app.scss';
import React from 'react';
import assign from 'object-assign';

import AppActions from '../actions/AppActions';
import AppStore from '../stores/AppStore';
import connectToStores from 'alt-utils/lib/connectToStores';

@connectToStores
export default class App extends React.Component {

    static getStores() {
        return [AppStore];
    }

    static getPropsFromStores() {
        return assign({},
            AppStore.getState()
        );
    }

    componentDidMount() {
        AppActions.fetch();
    }

    render() {
        const {todos} = this.props;

        return (
            <div className="app">
                <h1>Welcome to ReactJS! </h1>
                <p>
                    This is an example of a react/flux app. To get started, be sure to:
                </p>
                {todos.map((todo, index) =>
                    <p key={index}>
                        {todo.get('name')}
                    </p>
                )}
            </div>
        );
    }

}
