import '../components/favorite-restaurant';
import RestaurantFavoriteIdb from '../../data/favoriterestaurant-idb';
import FavoriteRestaurantInitiator from '../../utils/favorite-restaurant-initiator';

const Favorite = {
  async render() {
    return `
      <section class="section__list__restaurant">
        <div id="favorite_container" class="favorite_container">
          <list-favorite class="posts"></list-favorite>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const dataRestaurant = await RestaurantFavoriteIdb.getAllRestaurants();
    this.initFavoriteRestaurant(dataRestaurant);
  },

  initFavoriteRestaurant(dataRestaurant) {
    if (dataRestaurant.length < 1) {
      document.querySelector('#favorite_container').innerHTML = '<h3 class="empty_data"><span class="material-icons">sentiment_satisfied</span>&nbsp;&nbsp;&nbsp;Tidak ada data&nbsp;&nbsp;&nbsp;<span class="material-icons">sentiment_satisfied</span></h3>';
    } else {
      FavoriteRestaurantInitiator.init(dataRestaurant, document.querySelector('list-favorite'));
    }
  },
};

export default Favorite;
