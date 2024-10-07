const countryName = new URLSearchParams(location.search).get('name')
const flagImage = document.querySelector('.country-details img')
const countryNameH1 = document.querySelector('.country-details h1')
const nativeName = document.querySelector('.native-name')
const population = document.querySelector('.population')
const region = document.querySelector('.region')
const subRegion = document.querySelector('.sub-region')
const capital = document.querySelector('.capital')
const topLevelDomain = document.querySelector('.top-level-domain') 
const currencies = document.querySelector('.currencies') 
const languages = document.querySelector('.languages') 
const borderCountries = document.querySelector('.border-countries')
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

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
  .then((res) => res.json())
  .then(([country]) => {
    // console.log(country.borders)
    flagImage.src = country.flags.svg
    countryNameH1.innerText =  country.name.common
    region.innerText = country.region
    topLevelDomain.innerText = country.tld.join(', ')

    if(country.subregion) {
    subRegion.innerText = country.subregion
    }
    if(country.name.nativeName){
        nativeName.innerText = Object.values(country.name.nativeName)[0].common
      } else {
        nativeName.innerText = country.name.common
      }
    population.innerText = country.population.toLocaleString(
        "en-IN"
      )
    if(country.currencies) {
        currencies.innerText = (Object.values(country.currencies).map((currency) => currency.name).join(', '))
      }
    if(country.capital){
        capital.innerText = (country.capital).join(', ')
      }
    if(country.languages)
        languages.innerText = Object.values(country.languages).join(', ');
    if(country.borders) {
        country.borders.forEach((border) => {
            // console.log(border);
            fetch(`https://restcountries.com/v3.1/alpha/${border}`).then((res) => res.json()).then(([borderCountry]) => {
                // console.log(borderCountry);
                const borderCountryTag = document.createElement('a')
                borderCountryTag.innerText = borderCountry.name.common
                console.log(borderCountryTag);
                borderCountryTag.href = `country.html?name=${borderCountry.name.common}`
                borderCountries.append(borderCountryTag)
            })
        })
    } 
  })

  themeChanger.addEventListener('click', () => {
    const b = body.classList.toggle('dark')
    localStorage.setItem("allGoals", JSON.stringify(b));
  
  }) 