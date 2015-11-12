import React from "react";

import OfferStore from "../../stores/OfferStore";
import OfferActions from "../../actions/OfferActions";

import Group from "./Group";

class Offer extends React.Component {

    constructor() {
        super();
        this.state = OfferStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        OfferStore.listen(this.onChange);
        OfferActions.fetchOffer();
    }

    componentWillUnmount() {
        OfferStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        return (
            <div className="offer">
                <h1>Das gibt's bei uns</h1>
                <p>
                    Willkommen im BamBoo! Stöbere durch unser Angebot an herzhaften Spezialitäten
                    vom Grill und aus der Pfanne, kleinen Snacks und erfrischenden Getränken.
                </p>
                <img src="https://iisfs-shop.tobit.com/0/95d096dd-cfd6-46e6-b204-743f096f33e2.png"/>
                {this.state.offer.map((group) => {
                    if (!group.hidden) {
                        return (
                            <Group key={group.id} name={group.name} articles={group.articles}/>
                        );
                    }
                })}
            </div>
        );
    }

}

export default Offer;