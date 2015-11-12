import React from "react";

import Offer from "./offer/Offer";

class App extends React.Component {

    render() {
        return (
            <div className="tapp">
                <div className="tapp__content is-dark">
                    <Offer/>
                </div>
            </div>
        );
    }

}

export default App;