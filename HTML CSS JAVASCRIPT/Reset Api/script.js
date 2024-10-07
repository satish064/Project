const countriesContainer = document.querySelector(".countries-container");
const filerByRegion = document.querySelector('.filter-by-region')
const searchInput = document.querySelector('.search-container input')
const themeChanger = document.querySelector('.theme-changer')
const body = document.querySelector('body')
const dark = document.querySelector('.dark')

const allGoals = JSON.parse(localStorage.getItem("allGoals"))

if(allGoals) {
  body.classList.add('dark')
}
else {
  body.classList.remove('dark')
}


let allCountriesData

fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    renderCountries(data)
    allCountriesData = data
  });



filerByRegion.addEventListener('change', (e) => {
  fetch(`https://restcountries.com/v3.1/region/${filerByRegion.value}`)
  .then((res) => res.json())
  .then
  (renderCountries);
})

function renderCountries(data) {
  countriesContainer.innerHTML = ''
  data.forEach((country) => {
    // console.log(country); 
    const countryCard = document.createElement("a");
    countryCard.classList.add("country-card");
    // countryCard.setAttribute('target','_blank');
    countryCard.href = `./country.html?name=${country.name.common} `;
    countryCard.innerHTML = `
          <img src="${country.flags.svg}" alt="${country.name.common} flag"/>
        <div class="card-text">
              <h3 class="card-title">${country.name.common}</h3>
              <p><b>Population: </b>${country.population.toLocaleString(
                "en-IN"
              )}</p>
              <p><b>Capital: </b>${country.capital?.[0]}</p>
              <p><b>Region: </b>${country.region}</p>
        </div>
`;
    countriesContainer.append(countryCard);
  });
}

searchInput.addEventListener('input' , (e) => {
  // console.log(e.target.value);
  const filerCountries = allCountriesData.filter((country) => country.name.common.toLowerCase().includes(e.target.value.toLowerCase()))
  renderCountries(filerCountries)
})

themeChanger.addEventListener('click', () => {
  const b = body.classList.toggle('dark')
  localStorage.setItem("allGoals", JSON.stringify(b));

})