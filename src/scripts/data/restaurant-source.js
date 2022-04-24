import API_ENDPOINT from '../globals/api-endpoint';
import CONFIG from '../globals/config';

class RestaurantSource {
  static async listRestaurant() {
    try {
      const response = await fetch(API_ENDPOINT.LIST_RESTAURANT);
      const responseJson = await response.json();
      return responseJson.restaurants;
    } catch (err) {
      return {};
    }
  }

  static async detailRestaurant(id) {
    try {
      const response = await fetch(API_ENDPOINT.DETAIL_RESTAURANT(id));
      return response.json();
    } catch (err) {
      return {};
    }
  }

  static async addReview(review) {
    const response = await fetch(API_ENDPOINT.ADD_REVIEW, {
      method: 'POST',
      headers: {
        'X-Auth-Token': CONFIG.KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),
    });
    return response.json();
  }

  static async searchRestaurants(query) {
    try {
      const response = await fetch(API_ENDPOINT.SEARCH_RESTAURANT(query));
      return response.json();
    } catch (err) {
      return {};
    }
  }
}

export default RestaurantSource;
