var plus = document.querySelector(".main-navigation__button");
var catalog = document.querySelector(".main-navigation__catalog-list")
var form = document.querySelector(".search-form");
var button = document.querySelector(".search-form__button");
var input = document.querySelector(".search-form__input");

plus.addEventListener("click", function (evt){
    evt.preventDefault();
    catalog.classList.toggle("main-navigation__catalog_show");
})
input.addEventListener("focus", function (evt){
    evt.preventDefault();
    form.classList.add("search-form_show");
})
button.addEventListener("click", function (evt){
    evt.preventDefault();
    form.classList.remove("search-form_show");
})