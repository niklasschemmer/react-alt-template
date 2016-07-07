import React from 'react';
import AppStore from '../stores/AppStore';

import connectToStores from 'alt-utils/lib/connectToStores';

@connectToStores
class App extends React.Component {

    static getStores() {
        return [AppStore];
    }

    static getPropsFromStores() {
        return AppStore.getState();
    }

    render() {
        const {message} = this.props;

        return (
            <div>
                {message}
            </div>
        );
    }

}

export default App;