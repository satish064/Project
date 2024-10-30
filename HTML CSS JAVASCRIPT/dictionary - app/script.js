const input = document.querySelector('input');
const result = document.querySelector('.result');
const searchBtn = document.querySelector('button');
const exampleText = document.querySelector('.sub-heading');
const italicText = document.querySelector('.italic-text');
const header = document.querySelector('.header');
const audio = document.querySelector('audio')

async function dictionaryapi(word) {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    
    try {
        const dictionaryData = await fetch(url).then((res) => res.json());

        const example = dictionaryData[0].meanings[0].definitions[0].example || '';
        const classAdd = example ? '' : 'hide';

        header.classList.add('header-bottom');

        result.innerHTML = `
            <div class="dictionary-content">                
                <div class="audio">
                    <h1>${dictionaryData[0].word}</h1>
                    <button class="not-button" onclick="playSound()"> <i class="fas fa-volume-up"></i> </button>                    
                </div>
                <p class="details">
                    ${dictionaryData[0].meanings[0].partOfSpeech} ${dictionaryData[0].phonetic || ''}
                </p>
                <p class="paragraph">
                    ${dictionaryData[0].meanings[0].definitions[0].definition}
                </p>
                <div class="sub-heading ${classAdd}">
                    <div class="vertical-bar"></div>
                    <p class="italic-text">
                        ${example}
                    </p>
                </div>
            </div>`;
            audio.setAttribute("src", `${dictionaryData[0].phonetics[1].audio}`);
    } catch (error) {
        console.error('Error fetching dictionary data:', error);
        result.innerHTML = `
            <div class="error-message">
                <p>Could not retrieve word data. Please try again later.</p>
            </div>`;
    }
}

searchBtn.addEventListener("click", () => {
    dictionaryapi(input.value.trim());
});

input.addEventListener("keypress", (e) => {
    if (e.key === 'Enter') {
        dictionaryapi(input.value.trim());
    }
});

function playSound() {
    audio.play();
}