import CONFIG from '../global/config';

const MyReviewResto = (name, review) => {
  const reviewContainer = document.querySelector('#review');
  const optionDate = { day: 'numeric', month: 'long', year: 'numeric' };
  const date = new Date().toLocaleDateString('id-ID', optionDate);
  const myReview = `
  <article class="card-item">
            <div class="comment-item__content">
              <div class="comment-item__avatar">
                <img
                  src="${CONFIG.BASE_IMAGE_REVIEWS_URL}"
                  class="img-avatar lazyload"
                  alt="avatar profile reviewer"
                />
                <div class="comment-item__title">
                  <h1 tabindex="0">${name}</h1>
                  <p>Tanggal Review: ${date}</p>
                </div>
              </div>
              <p class="comment-item__description">${review}</p>
            </div>
          </article>
  `;
  reviewContainer.innerHTML += myReview;
};

export default MyReviewResto;
