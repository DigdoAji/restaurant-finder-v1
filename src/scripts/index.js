import 'regenerator-runtime';
import '../styles/main.scss';
import '../styles/responsive.scss';
import data from '../data/DATA.json';
import fact from '../data/FACT.json';

// Navbar
const hamburgerIcon = document.querySelector(".menuHamburger");
const navItem = document.querySelector(".nav-bar");


hamburgerIcon.addEventListener("click", event => {
  hamburgerIcon.classList.toggle("active");
  navItem.classList.toggle("active");
  event.stopPropagation();
});

// Explore Resto Content
let exploreResto = ``;
data.restaurants.forEach((resto) => {
    exploreResto += `
    <article class="card-item">
        <div class="contain-img-resto">
            <img
                class="card-item__thumbnail"
                src="${resto.pictureId}"
                alt="Gambar Tempat Restaurant"
            />
            <p class="city__top-left">Kota ${resto.city}</p>
        </div>
        <div class="card-item__content">
            <h1 class="resto-item__title">
                <a href="#">${resto.name}</a>
            </h1>
            <div class="resto-rating">
                <img
                    class="star-rating-resto"
                    src="../images/star-rating.svg"
                    alt="rating bintang"
                />
                <h2>${resto.rating}</h2>
            </div>
            <p class="resto-item__description">${resto.description}</p>
        </div>
    </article>
    `;
    document.querySelector(".posts-explore").innerHTML = exploreResto;
});

// Food Fact Content
let foodFact = ``;
fact.funfacts.forEach((item) => {
    foodFact += `
    <article class="card-item">
        <div class="contain-img-fact">
            <img
                class="card-item__thumbnail"
                src="${item.imageURL}"
                alt="Gambar ilustrasi makanan"
            />
        </div>
        <div class="card-item__content">
            <h1 class="fact-item__title">${item.name}</h1>
            <p class="fact-item__date">
                Publish Date ${item.date} By
                <a href="#" class="fact-item__date__author">${item.publisher}</a>
            </p>
            <p class="fact-item__description">${item.description}</p>
            <p class="card-item__readmore">
                <a href="#" class="btn-readArticle">Read More</a>
            </p>
        </div>
    </article>
    `;
    document.querySelector(".posts-fact").innerHTML = foodFact;
});

// Read more Read Less
const desc = document.querySelector(".fact-item__description")
const btnRead = document.querySelector(".btn-readArticle");

