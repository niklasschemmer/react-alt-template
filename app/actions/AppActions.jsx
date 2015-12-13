import alt from "../alt";

class AppActions {

    sayHello(name) {
        this.dispatch(name);
    }

}

export default alt.createActions(AppActions);