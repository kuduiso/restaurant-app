const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorite restaurant', ({ I }) => {
  I.seeElement('.empty_data');
});

Scenario('liking a restaurant', async ({ I }) => {
  I.amOnPage('/#/');

  I.click(locate('.read__more').first());

  I.seeElement('.detail_restaurant_item > .detail_description > h2');
  const restaurantFirst = locate('.detail_restaurant_item > .detail_description > h2').first();
  const restaurantTitle = await I.grabTextFrom(restaurantFirst);

  I.seeElement('#btn_favorite');
  I.click('#btn_favorite');

  I.amOnPage('/#/favorite');
  I.seeElement('.item__restaurant');
  const likedRestaurant = await I.grabTextFrom('.item__restaurant > figure > figcaption');

  assert.strictEqual(restaurantTitle, likedRestaurant);
});

Scenario('unliking a restaurant', async ({ I }) => {
  I.amOnPage('/#/');

  I.click(locate('.read__more').first());

  I.seeElement('.detail_restaurant_item > .detail_description > h2');
  const restaurantFirst = locate('.detail_restaurant_item > .detail_description > h2').first();
  const restaurantTitle = await I.grabTextFrom(restaurantFirst);

  I.seeElement('#btn_favorite');
  I.click('#btn_favorite');

  I.amOnPage('/#/favorite');
  I.seeElement('.item__restaurant');
  const likedRestaurant = await I.grabTextFrom('.item__restaurant > figure > figcaption');

  assert.strictEqual(restaurantTitle, likedRestaurant);

  I.click(locate('.read__more').first());
  I.seeElement('#btn_favorite');
  I.click('#btn_favorite');

  I.amOnPage('/#/favorite');
  I.seeElement('.empty_data');
});
