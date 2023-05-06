const URL = 'https://pixabay.com/api/';
const KEY = '34545827-e90c0f0f1a816b36797418de9';
const FILTER = '&image_type=photo&orientation=horizontal&per_page=12';

export const fetchImages = (query, page = 1) => {
  return fetch(`${URL}?q=${query}&page=${page}&key=${KEY}${FILTER}`).then(
    response => response.json()
  );
}