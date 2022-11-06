function PixabayAPI(query) {
  const BASE_URL = 'https://pixabay.com/api/';
  const KEY = '30097880-73ac2834789f98742941535c7';
  const searchParams = 'image_type=photo&orientation=horizontal&per_page=12';

  return fetch(`${BASE_URL}?q=${query}&page=1&key=${KEY}&${searchParams}`).then(
    response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error('Woops, nothing found for your request'));
    }
  );
}

const api = { PixabayAPI };

export default api;
