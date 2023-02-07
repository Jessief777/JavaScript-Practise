"use strict";

// const { response } = require("express");
// const { render } = require("sass");

const renderError = (error) => {
  countriesContainer.insertAdjacentHTML("beforeend", error.message);
};

const countriesContainer = document.querySelector(".countries");

const renderCountry = (country) => {
  const html = `
  <article class="country">
    <img class="country__img" src="${country.flag}" />
    <div class="country__data">
      <h3 class="country__name">${country.name}</h3>
      <h4 class="country__region">${country.region}</h4>
      <p class="country__row"><span>👫</span>${
        (country.population / 1000000).toFixed(1) + " M"
      }</p>
      <p class="country__row"><span>🗣️</span>${country.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${country.currencies[0].name}</p>
    </div>
  </article>
`;
  //  (country.population / 1000000).toFixed(1) + " M" means to make it count by million
  countriesContainer.insertAdjacentHTML("beforeend", html);
};

const getCountry = (country) => {
  const request = new XMLHttpRequest();

  request.open("GET", `https://restcountries.com/v2/name/${country}`);

  request.send();

  request.addEventListener("load", function () {
    const data = JSON.parse(this.responseText);
    //responseText is a string, we need to use JSON.parse to make it to JSON format
    const country = data[0];
    renderCountry(country);

    //2. get neighbor for the country selected:
    if (!country.borders) {
      //todo: error handling later
      return;
    }

    const neighbour = country.borders[0];
    // need to open a new HTTP request:
    const neighbourRequest = new XMLHttpRequest();

    neighbourRequest.open(
      "GET",
      `https://restcountries.com/v2/alpha/${neighbour}`
    );

    neighbourRequest.send();

    neighbourRequest.addEventListener("load", function () {
      const country = JSON.parse(this.responseText);
      renderCountry(country);
    });
  });
};
//getCountry("China");

const getCountryBetter = (country) => {
  const request = fetch(`https://restcountries.com/v2/name/${country}`);
  request
    .then((response) => response.json())
    .then((data) => {
      const country = data[0];
      renderCountry(country);
      if (!country.borders) {
        throw new Error("This country has no neighbour.");
      }
      const neighbour = country.borders[0];
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then((response) => response.json())
    .then((data) => renderCountry(data))
    .catch((error) => renderError(error))
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

//async + await
const getCountryBest = async (country) => {
  try {
    const response = await fetch(
      `https://restcountries.com/v2/name/${country}`
    );
    const data = await response.json();
    const firstCountry = data[0];
    renderCountry(firstCountry);

    if (!firstCountry.borders) {
      throw new Error("This country has no neighbour.");
    }

    const neighbour = firstCountry.borders[0];
    const neighbourRes = await fetch(
      `https://restcountries.com/v2/alpha/${neighbour}`
    );
    const neighbourCountry = await neighbourRes.json();
    renderCountry(neighbourCountry);
  } catch (error) {
    renderError(error);
  } finally {
    countriesContainer.style.opacity = 1;
  }
};

const btn = document.querySelector(".btn-country");
//btn.addEventListener("click", () => getCountryBetter("china"));
btn.addEventListener("click", () => getCountryBest("china"));

//getCountryBetter("Australia");
// getCountry("Australia");
