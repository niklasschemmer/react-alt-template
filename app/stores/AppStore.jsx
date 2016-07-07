import alt from '../alt';
import {createStore} from 'alt-utils/lib/decorators';
import AppActions from '../actions/AppActions';

@createStore(alt)
class AppStore {

    constructor() {
        this.bindActions(AppActions);

        this.state = {
            message: 'Welcome to ReactJS!'
        }
    }

}

export default AppStore;