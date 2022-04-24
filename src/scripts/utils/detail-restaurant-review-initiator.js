import RestaurantSource from '../data/restaurant-source';

const DetailRestaurantReviewInitiator = {
  init(data, elementReview) {
    this._data = data.restaurant;
    this._elementReview = elementReview;
    this._elementReview.restaurant = this._data;
    this.sendDataReview();
  },

  sendDataReview() {
    const eventSendReview = async (event) => {
      event.preventDefault();
      const nameInput = this._elementReview.inputName;
      const reviewInput = this._elementReview.inputReview;
      const reviewData = {
        id: this._data.id,
        name: nameInput,
        review: reviewInput,
      };
      const updatedReview = await RestaurantSource.addReview(reviewData);
      this._elementReview.asyncReviews = await updatedReview.customerReviews;
    };
    this._elementReview.sendReview = eventSendReview;
    document.querySelector('pre-loader').remove();
  },
};

export default DetailRestaurantReviewInitiator;
