import FavoriteRestoIdb from '../../data/favoritesresto-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const favoriteResto = {
  async render() {
    return `
      <section class="content">
      <div class="heading">
        <h1 class="heading-label">Favorites Restaurant</h1>
        <p class="heading-text">This is Your Favorites Restaurant</p>
        <div class="load-text" id="isEmpty"></div>
        <div class="posts-explore" id="restaurants"></div>
      </div>
      </section>
      `;
  },

  async afterRender() {
    const favItem = await FavoriteRestoIdb.getAllResto();
    const favContainer = document.querySelector('#restaurants');
    const isEmptyContainer = document.querySelector('#isEmpty');
    if (favItem.length === 0) {
      isEmptyContainer.innerHTML = '<h2>You don\'t have any Favorite Restaurant</h2>';
    }

    favItem.forEach((restaurant) => {
      favContainer.innerHTML += createRestoItemTemplate(restaurant);
    });
  },
};

export default favoriteResto;
