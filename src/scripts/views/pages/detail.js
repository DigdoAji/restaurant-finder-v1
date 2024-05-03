import UrlParser from '../../routes/url-parser';
import RestaurantAPISource from '../../data/restaurantAPI-source';
import { createRestoDetailTemplate, createLoadingText, createAfterLoadingText } from '../templates/template-creator';
import FavoriteButtonInitiator from '../../utils/favorite-button-initiator';
import MyReviewResto from '../../utils/my-review-handler';

const Detail = {
  async render() {
    return `
    <section class="content">
      <div class="heading pos-fix">
        <h1 class="heading-label">Detail Restaurant</h1>
      </div>
      <div class="detail" id="detail"></div>
      <div class="load-text" id="loading"></div>
    </section>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const detailContainer = document.querySelector('#detail');
    const loadingContainer = document.querySelector('#loading');
    loadingContainer.innerHTML = createLoadingText();

    try {
      const restaurantItem = await RestaurantAPISource.detailResto(url.id);
      loadingContainer.setAttribute('style', 'display: none;');
      detailContainer.scrollTop = 0;
      detailContainer.innerHTML = createRestoDetailTemplate(restaurantItem);

      await FavoriteButtonInitiator.init({
        favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
        resto: {
          city: restaurantItem.city,
          id: restaurantItem.id,
          pictureId: restaurantItem.pictureId,
          name: restaurantItem.name,
          description: restaurantItem.description,
          rating: restaurantItem.rating,
        },
      });
    } catch (err) {
      loadingContainer.innerHTML = createAfterLoadingText(err);
    }

    const submitReview = document.querySelector('#submitReview');
    const inputName = document.querySelector('#inputName');
    const inputReview = document.querySelector('#inputReview');

    submitReview.addEventListener('click', async (event) => {
      event.preventDefault();
      if (inputName.value === '' || inputReview.value === '') {
        alert('Input still empty. Please fill the input form!');
        inputName.value = '';
        inputReview.value = '';
      } else {
        const data = {
          id: url.id,
          name: inputName.value,
          review: inputReview.value,
        };
        await RestaurantAPISource.addReviewResto(data);
        MyReviewResto(inputName.value, inputReview.value);
        inputName.value = '';
        inputReview.value = '';
      }
    });
  },
};

export default Detail;
