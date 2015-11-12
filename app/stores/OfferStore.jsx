import alt from "../alt";
import OfferActions from "../actions/OfferActions";

class OfferStore {

    constructor() {
        this.offer = [];
        this.errorMessage = null;

        this.bindListeners({
            handleUpdateOffer: OfferActions.updateOffer,
            handleFetchOffer: OfferActions.fetchOffer,
            handleCatchOffer: OfferActions.catchOffer
        });
    }

    handleUpdateOffer(offer) {
        this.offer = offer;
        this.errorMessage = null;
    }

    handleFetchOffer() {
        this.offer = [];
    }

    handleCatchOffer(errorMessage) {
        this.errorMessage = errorMessage;
    }
}

export default alt.createStore(OfferStore, "OfferStore");