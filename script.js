var writeUs = document.querySelector(".contacts__button");
var popup = document.querySelector(".contacts-modal");
var close = document.querySelector(".contacts-form__button_close");
var plus = document.querySelector(".main-navigation__button");
var catalog = document.querySelector(".main-navigation__catalog-list");
var address = document.querySelector(".footer__address");
var mapPopup = document.querySelector(".map-modal");
var mapClose = document.querySelector(".contacts-form__button_close");
var form = document.querySelector(".search-form");
var button = document.querySelector(".search-form__button");
var input = document.querySelector(".search-form__input");

writeUs.addEventListener("click", function (evt){
    evt.preventDefault();
    popup.classList.add("modal-show");
})
close.addEventListener("click", function (evt){
    evt.preventDefault();
    popup.classList.remove("modal-show");
})
plus.addEventListener("click", function (evt){
    evt.preventDefault();
    catalog.classList.toggle("main-navigation__catalog_show");
    console.log("клик");
})

address.addEventListener("click", function (evt){
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
})
mapClose.addEventListener("click", function (evt){
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
})
input.addEventListener("focus", function (evt){
    evt.preventDefault();
    form.classList.add("search-form_show");
})
button.addEventListener("click", function (evt){
    evt.preventDefault();
    form.classList.remove("search-form_show");
})