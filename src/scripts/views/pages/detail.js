import RestaurantSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import '../components/detail-restaurant';
import '../components/detail-restaurant-review';
import '../components/detail-restaurant-menu';
import DetailReviewInitiator from '../../utils/detail-restaurant-review-initiator';
import DetailMenuInitiator from '../../utils/detail-restaurant-menu-initiator';
import DetailRestaurantInitiator from '../../utils/detail-restaurant-initiator';

const Detail = {
  async render() {
    return `
    <section class="section__list__restaurant">
      <div class="detail_restaurant_container">
        <detail-restaurant></detail-restaurant>
      </div>
      <h3>Review Pelanggan</h3>
      <pre-loader></pre-loader>
      <div class="customer_review">
        <detail-review></detail-review>
      </div>
      <h3>Daftar Menu</h3>
      <pre-loader></pre-loader>
      <div class="detail_menu">
        <detail-menu></detail-menu>
      </div>
    </section>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseUrlActiveWithoutCombiner();
    const dataRestaurant = await RestaurantSource.detailRestaurant(url.id);
    this._initialDetailRestaurant(dataRestaurant);
  },

  async _initialDetailRestaurant(dataRestaurant) {
    await DetailReviewInitiator.init(dataRestaurant, document.querySelector('detail-review'));
    await DetailMenuInitiator.init(dataRestaurant, document.querySelector('detail-menu'));
    await DetailRestaurantInitiator.init(dataRestaurant, document.querySelector('detail-restaurant'));
  },
};

export default Detail;
