const searchBtn = document.querySelector('.search-box button')
const input = document.querySelector('input')
const countryDetails = document.querySelector('.country-details-container')


async function countryData(countryName){
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;

    try {
        const data = await fetch(finalURL).then((res) => res.json())
    console.log(data);
    console.log();
    
    countryDetails.innerHTML = `
     <div class="country-img">
                <img src="${data[0].flags.svg}" alt="${data[0].flags.alt}">
                <h1>${data[0].name.common}</h1>
            </div>
            <div class="cuntry-details">
                <h4>Capital: <span class="grey-text">${data[0].capital[0]}</span></h4>
                <h4>Continent: <span class="grey-text">${data[0].continents[0]}</span> </h4>
                <h4>Population: <span class="grey-text">${data[0].population.toLocaleString("en-IN")}</span> </h4>
                <h4>Currency: <span class="grey-text">${data[0].currencies[Object.keys(data[0].currencies)[0]].name} - ${Object.keys(data[0].currencies)[0]}</span></h4>
                <h4>Common Languages: <span class="grey-text">${Object.values(data[0].languages).toString().split(",").join(",")}</span> </h4>
            </div>
    `
    } catch (error) {
        console.error('Error fetching dictionary data:', error);
        countryDetails.innerHTML = `
            <div class="error-message">
                <p>Enter the correct espelling of the country</p>
            </div>`;
    }
    
}

searchBtn.addEventListener('click' , () => {
    countryData(input.value)
})
