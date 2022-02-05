const img = document.querySelector('img');

let current = 'cats';

async function getCats() {
  const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=0NOHxAcxsQEhAcDUdg4xA1bU20pusQw4&s=${current}`, {mode: 'cors'});
  const catData = await response.json();
  img.src = catData.data.images.original.url;
    
}

getCats()