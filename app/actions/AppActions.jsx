import alt from "../alt";

class AppActions {

    changeMessage(message) {
        this.dispatch(message);
    }

}

export default alt.createActions(AppActions);