const assert = require('assert');

Feature('Unfavorite Resto');

Before(({ I }) => {
  I.amOnPage('/#/favorites-page');
});

Scenario('showing empty favorited restaurant', ({ I }) => {
  I.see('You don\'t have any Favorite Restaurant', '#isEmpty');
});

Scenario('Unfavoriting a restaurant', async ({ I }) => {
  I.see('You don\'t have any Favorite Restaurant', '#isEmpty');

  I.amOnPage('/');
  I.see('Loading API Data. Please Wait.....', '#loading');
  I.wait(1);

  I.seeElement('.card-item');
  I.seeElement('.resto-item__title a');

  const favoriteResto = locate('.resto-item__title a').first();
  const checkTitleFirst = await I.grabTextFrom(favoriteResto);
  I.wait(1);
  I.click(favoriteResto);

  I.seeElement('#FavButton');
  I.wait(1);
  I.click('#FavButton');

  I.amOnPage('/#/favorites-page');
  I.seeElement('.card-item');

  const checkTitleSecond = await I.grabTextFrom('.resto-item__title a');
  assert.strictEqual(checkTitleFirst, checkTitleSecond);

  I.seeElement('.resto-item__title a');

  const UnfavoritedResto = locate('.resto-item__title a').first();
  await I.grabTextFrom(UnfavoritedResto);
  I.wait(1);
  I.click(UnfavoritedResto);

  I.seeElement('#FavButton');
  I.wait(1);
  I.click('#FavButton');

  I.amOnPage('/#/favorites-page');
  I.see('You don\'t have any Favorite Restaurant', '#isEmpty');
});
