import alt from "../alt";

import OfferSource from "../db/OfferSource";

class OfferActions {

    updateOffer(offer) {
        this.dispatch(offer);
    }

    fetchOffer() {
        this.dispatch();
        OfferSource.getOffer().then((offer) => {
            this.actions.updateOffer(offer);
        })
        .catch((errorMessage) => {
            this.actions.catchOffer(errorMessage);
        });
    }

    catchOffer(errorMessage) {
        this.dispatch(errorMessage);
    }

}

export default alt.createActions(OfferActions);