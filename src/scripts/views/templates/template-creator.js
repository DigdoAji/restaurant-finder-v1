import CONFIG from '../../global/config';

const createRestoDetailTemplate = (restaurant) => `
          <img
            class="detail__poster"
            src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}"
            alt="Restaurant ${restaurant.name}"
          />
          <div class="detail__title">
            <h2 tabindex="0">${restaurant.name}</h2>
          </div>
          <div class="split-info">
            <div class="detail__info">
              <h4>Lokasi</h4>
              <p>Kota ${restaurant.city}</p>
              <h4>Alamat</h4>
              <p>${restaurant.address}</p>
              <h4>Rating</h4>
              <div class="resto-rating">
                <img
                  class="star-rating-resto"
                  src="../images/star-rating.svg"
                  alt="rating bintang"
                />
                <h2>${restaurant.rating}</h2>
              </div>
            </div>
            <div class="detail__info">
              <h4>Kategori</h4>
              <p>${restaurant.categories.map((category) => `${category.name}`).join(', ')}</p>
              <h4>Makanan</h4>
              <p>${restaurant.menus.foods.map((food) => `${food.name}`).join(', ')}</p>
              <h4>Minuman</h4>
              <p>${restaurant.menus.drinks.map((drink) => `${drink.name}`).join(', ')}</p>
            </div>
          </div>
          <div class="detail__overview">
            <h3>Overview</h3>
            <p>
              ${restaurant.description}
            </p>
          </div>
          <div id="favoriteButtonContainer"></div>

      <div class="heading">
        <h1 class="heading-label">Customer Review</h1>
        <p class="heading-text">What your review about "${restaurant.name}" ?</p>

        <form>
            <div class="form-row">
              <h2>Name</h2>
              <input id="inputName" name="inputName" type="text" class="input-text" placeholder="Write your name">
            </div>
            <div class="form-row">
              <h2>Review</h2>
              <textarea id="inputReview" name="inputReview" type="text" class="input-text textarea" placeholder="Write your review about restaurant"></textarea>
            </div>
            <button id="submitReview" type="submit" class="btn-review">Send Review</button>
        </form>

        <p class="heading-text">What their reviews about "${restaurant.name}" ?</p>
        <div class="posts-review" id="review">
        ${restaurant.customerReviews.map((comment) => `
          <article class="card-item">
            <div class="comment-item__content">
              <div class="comment-item__avatar">
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                  class="img-avatar"
                  alt="avatar profile reviewer"
                />
                <div class="comment-item__title">
                  <h1 tabindex="0">${comment.name}</h1>
                  <p>Tanggal Review: ${comment.date}</p>
                </div>
              </div>
              <p class="comment-item__description">${comment.review}</p>
            </div>
          </article>
          `).join('')}
        </div>
      </div>
      `;

const createFavoritesButtonTemplate = () => `
      <button class="btn-like" aria-label="favorite this resto" id="FavButton">
        <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>Favorite
      </button>
    `;

const createUnFavoritesButtonTemplate = () => `
      <button class="btn-like" aria-label="unfavorite this resto" id="FavButton">
        <i class="fa fa-thumbs-up" aria-hidden="true"></i>Unfavorite
      </button>
    `;

const createRestoItemTemplate = (restaurant) => `
    <article class="card-item">
        <div class="contain-img-resto">
            <img
                class="card-item__thumbnail"
                src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}"
                alt="Restaurant ${restaurant.name}"
            />
            <p class="city__top-left">Kota ${restaurant.city}</p>
        </div>
        <div class="card-item__content">
            <h1 class="resto-item__title">
                <a href="${`/#/detail/${restaurant.id}`}"">${restaurant.name}</a>
            </h1>
            <div class="resto-rating">
                <img
                    class="star-rating-resto"
                    src="../images/star-rating.svg"
                    alt="rating bintang"
                />
                <h2>${restaurant.rating}</h2>
            </div>
            <p class="resto-item__description">${restaurant.description}</p>
        </div>
    </article>
  `;

const createFactItemTemplate = (foodfact) => `
  <article class="card-item">
  <div class="contain-img-fact">
      <img
          class="card-item__thumbnail"
          src="${foodfact.imageURL}"
          alt="Gambar ilustrasi makanan"
      />
  </div>
  <div class="card-item__content">
      <h1 class="fact-item__title">${foodfact.name}</h1>
      <p class="fact-item__date">
          Publish Date ${foodfact.date} By
          <a href="#" class="fact-item__date__author">${foodfact.publisher}</a>
      </p>
      <p class="fact-item__description">${foodfact.description}</p>
      <p class="card-item__readmore">
          <a href="#" class="btn-readArticle">Read More</a>
      </p>
  </div>
</article>
  `;

const createLoadingText = () => `
  <h2>Loading Data......</h2>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createFactItemTemplate,
  createFavoritesButtonTemplate,
  createUnFavoritesButtonTemplate,
  createLoadingText,
};
