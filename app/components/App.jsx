import React from "react";
import AppStore from "../stores/AppStore";
import AppActions from "../actions/AppActions";

class App extends React.Component {

    constructor() {
        super();
        this.state = AppStore.getState();
    }

    componentDidMount() {
        AppStore.listen(this.onChange.bind(this));
    }

    componentWillUnmount() {
        AppStore.unlisten(this.onChange.bind(this));
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
            </div>
        );
    }

}

export default App;