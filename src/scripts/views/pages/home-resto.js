import RestaurantAPISource from '../../data/restaurantAPI-source';
import fact from '../../data/FACT.json';
import {
  createRestoItemTemplate,
  createFactItemTemplate,
  createSkeletonRestoTemplate,
  createLoadingText,
  createAfterLoadingText,
} from '../templates/template-creator';

const homeResto = {
  async render() {
    return `
    <section class="content">
    <div class="heading">
      <h1 class="heading-label">Explore Restaurant</h1>
      <p class="heading-text">Let's Explore Restaurant in Your Area</p>
      <div class="posts-explore" id="explore">
        ${createSkeletonRestoTemplate(6)}
      </div>
      <div class="load-text" id="loading"></div>
    </div>
    </section>

    <section class="content">
      <div class="heading">
        <h1 class="heading-label">Food Fact</h1>
        <p class="heading-text">Fun fact about foods in restaurant</p>
        <div class="posts-card" id="fact"></div>
      </div>
    </section>
    `;
  },

  async afterRender() {
    const loadingContainer = document.querySelector('#loading');
    loadingContainer.innerHTML = createLoadingText();
    const exploreContainer = document.querySelector('#explore');
    exploreContainer.innerHTML = '';

    try {
      const exploreResto = await RestaurantAPISource.homeResto();
      loadingContainer.setAttribute('style', 'display: none;');
      exploreResto.forEach((restaurant) => {
        exploreContainer.innerHTML += createRestoItemTemplate(restaurant);
      });
    } catch (err) {
      loadingContainer.innerHTML = createAfterLoadingText(err);
    }

    const factResto = await fact.funfacts;
    const factContainer = document.querySelector('#fact');
    factResto.forEach((foodfact) => {
      factContainer.innerHTML += createFactItemTemplate(foodfact);
    });
  },
};

export default homeResto;
