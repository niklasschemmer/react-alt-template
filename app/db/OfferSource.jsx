class OfferSource {

    static getOffer() {
        return fetch("./app/db/offer.json")
            .then((res) => res.json());
    }

}

export default OfferSource;