import CONFIG from '../../global/config';

const createRestoDetailTemplate = (restaurant) => `
  <div class="detail__resto">
    <img
      class="detail__poster"
      src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}"
      alt="Restaurant ${restaurant.name}"
    />
    <div class="detail__info">
      <div class="name">  
        <i title="restaurant" class="fa fa-store"></i>
        <span>${restaurant.name}</span>
      </div>
      <div class="address">
        <i title="address" class="fa fa-map-marker-alt"></i>
        <span>${restaurant.address}, ${restaurant.city}</span>
      </div>
      <div class="rating">
        <div class="resto-rating">
          <img
            class="star-rating-resto"
            src="../icons/star-rating.svg"
            alt="rating bintang"
          />
          <h2>${restaurant.rating}</h2>
        </div>
      </div>
      <div class="category">
        <p><strong>Categories:</strong></p>
        ${restaurant.categories.map((category) => `<span>${category.name}</span>`).join(' ')}
      </div>
      <div class="favorite">
        <div id="favoriteButtonContainer"></div>
      </div>
    </div>
  </div>

    <div class="detail__description">
      <h3>Overview</h3>
      <p>${restaurant.description}</p>
    </div>

    <div class="detail__menu">
      <h3>Menu</h3>
      <div class="menu__list">
        <div>
          <h4>Foods</h4>
          <ul>
            ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
          </ul>
        </div>
        <div>
          <h4>Drinks</h4>
          <ul>
            ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
          </ul>
        </div>  
      </div>
    </div>

    <div class="detail__reviews">
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
          <button id="submitReview" type="submit">Send Review</button>
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
                  <h1>${comment.name}</h1>
                  <p>Tanggal Review: ${comment.date}</p>
                </div>
              </div>
              <p class="comment-item__description">${comment.review}</p>
            </div>
          </article>
          `).join('')}
        </div>
      </div>
    </div>
      `;

const createFavoritesButtonTemplate = () => `
      <button aria-label="favorite this resto" id="FavButton">
        <i class="far fa-heart" aria-hidden="true"></i>Favorite
      </button>
    `;

const createUnFavoritesButtonTemplate = () => `
      <button aria-label="unfavorite this resto" id="FavButton">
        <i class="fas fa-heart" aria-hidden="true"></i>Unfavorite
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
            <div class="resto-item__rating">
              <div class="resto-rating">
                  <img
                    class="star-rating-resto"
                    src="../icons/star-rating.svg"
                    alt="rating bintang"
                  />
                  <h2>${restaurant.rating}</h2>
              </div>
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
          alt="ilustrasi makanan"
      />
  </div>
  <div class="card-item__content">
      <h1 class="fact-item__title">${foodfact.name}</h1>
      <p class="fact-item__date">
          Publish Date ${foodfact.date} By
          <a href="${foodfact.urlprofile}" class="fact-item__date__author" target="_blank" rel="noreferrer">${foodfact.publisher}</a>
      </p>
      <p class="fact-item__description">${foodfact.description}</p>
      <p class="card-item__readmore">
          <a href="${foodfact.urlfact}" target="_blank" rel="noreferrer">Read More</a>
      </p>
  </div>
</article>
  `;

const createLoadingText = () => `
    <div class="lds-dual-ring"></div>
    <h3 class="load-process">Loading API Data. Please Wait.....</h3>
`;

const createAfterLoadingText = (err) => `
    <div class="load-error">
      <i class="fas fa-exclamation-triangle"></i>
      <h3>API ERROR</h3>
      <h3>Error: "${err}", Try to refresh the page!</h3>
    </div>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createFactItemTemplate,
  createFavoritesButtonTemplate,
  createUnFavoritesButtonTemplate,
  createLoadingText,
  createAfterLoadingText,
};
