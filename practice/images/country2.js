const countryName = new URLSearchParams(location.search).get('name')

const aboutCountryContainer = document.querySelector('.about-country-container')


fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data[0].languages
    )
    aboutCountryContainer.innerHTML = `
    <div class="country-img">
        <img src="${data[0].flags.svg}" alt="" />
      </div>
      <div class="all-about-country">
        <div class="about-country-label-container">
            <div class="content-1">
              <div class="about-country-labels">
          <h2 class="country-name">${data[0].name.common}</h2>
          </div>
              <p><b>Native Name:</b>${
              }
              </p>
              <p><b>Population:</b>${data[0].population.toLocaleString(
                "en-IN")}</p>
              <p><b>Region</b>${data[0].region}</p>
              <p><b>Sub Region:</b>${data[0].subregion}</p>
              <p><b>Capital:</b>${data[0].
                capital[0]}</p>
            </div>
            <div class="content-2">
              <p><b>Top Level Domain:</b>be</p>
              <p><b>Currencies:</b>Euro</p>
              <p><b>Language:</b>Butch,French,German</p>
            </div>
          </div>
          <p><b>Border Countries:</b><button>French</button><button>Germany</button><button>Netherlands</button></p>
    `
  })


