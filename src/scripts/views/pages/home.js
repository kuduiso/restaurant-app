import RestaurantSource from '../../data/restaurant-source';
import '../components/item-restaurant';
import '../components/pre-loader';
import HomeRestaurantInitiator from '../../utils/home-restaurant-initiator';

const Home = {
  async render() {
    return `
      <div class="hero">
          <picture>
              <source media="(max-width: 625px)" srcset="./heros/hero-image_1-small.jpg">
              <img
                  src="./heros/hero-image_1-large.jpg"
                  alt="hero image restaurant"></img>
          </picture>
          <div class="hero__inner">
              <h1 class="hero__title">Resto Terbaik Dengan Hidangan Terlezat</h1>
              <p class="hero__tagline">Temukan Beragam Pilihan Resto Terbaik Di Sini Dengan Aneka Sajian Makanan Penuh Kenikmatan</p>
          </div>
      </div>
      <section class="section__list__restaurant">
          <h1 class="section__title">Pilihan Resto Terbaik</h1>
          <pre-loader></pre-loader>
          <div id="posts" class="posts">
          </div>
      </section>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.listRestaurant();
    const restaurantContainer = document.querySelector('#posts');
    this._initHomeRestaurant(restaurants, restaurantContainer);
  },

  _initHomeRestaurant(data, elementPost) {
    HomeRestaurantInitiator.init(data, elementPost);
  },
};

export default Home;
