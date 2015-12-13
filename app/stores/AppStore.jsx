import alt from "../alt";
import AppActions from "../actions/AppActions";

class AppStore {

    constructor() {
        this.bindActions(AppActions);

        this.message = "Hello World!";
    }

    sayHello(name) {
        console.debug(`Hello ${name}! I am the AppStore!`);
    }

}

export default alt.createStore(AppStore, "AppStore");