import alt from '../alt';
import AppActions from '../actions/AppActions';

class AppStore {

    constructor() {
        this.bindActions(AppActions);

        this.state = {
            message: 'Hello!'
        }
    }

    changeMessage(message) {
        this.setState({
            message: message
        });
    }

}

export default alt.createStore(AppStore, 'AppStore');