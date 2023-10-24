"use strict";

window.addEventListener("DOMContentLoaded", () => {
  const movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против...",
    ],
  };

  const addForm = document.querySelector("form.add"),
    addInput = addForm.querySelector(".adding__input"),
    checkBox = addForm.querySelector("[type = checkbox]"),
    promo = document.querySelector(".promo__interactive-list");
  
  function genreFilm(genre) {
    const div = document.querySelector(".promo__genre");
    div.innerHTML = `${genre}`;
  }

  function fon(link) {
    const post = document.querySelector(".promo__bg");
    post.style.backgroundImage = `${link}`;
  }

  function clearAdv() {
    const adv = document.querySelectorAll(".promo__adv img");
    adv.forEach((element) => {
      element.remove();
    });
  }

  function createList(movies, promo) {
    movies.sort();
    promo.innerHTML = "";
    movies.forEach(function (film, i) {
      promo.innerHTML += `<li class='promo__interactive-item'>${i + 1} ${film}
      <div class='delete'></div>
      </li>`;
    });

    document.querySelectorAll(".delete").forEach((btn, i) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        btn.parentElement.remove();
        movieDB.movies.splice(i, 1);
        createList(movieDB.movies, promo);
      });
    });
  }

  addForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let newFilm = addInput.value.trim();
    if (newFilm == "") {
      e.target.reset();
      return;
    } else {
      if (newFilm.length > 21) {
        newFilm = `${newFilm.substring(0, 22)}...`;
      }
      const favorite = checkBox.checked;
      if (favorite) {
        console.log("Добавляем ваш любимый фильм");
      }
      movieDB.movies.push(newFilm);
      movieDB.movies.sort();
      createList(movieDB.movies, promo);
      e.target.reset();
    }
  });
  console.log(movieDB.movies);

  genreFilm("Драма");
  fon("url('img/bg.jpg')");
  clearAdv();
  createList(movieDB.movies, promo);
});
