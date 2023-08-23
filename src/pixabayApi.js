// import axios from 'axios';

const API_KEY = '38991660-0d1707cc046610897226410cf';
const BASE_URL = 'https://pixabay.com/api/';

export class PixabayApi {
  constructor() {
    this.query = '';
    this.page = 1;
    this.per_page = 40;
  }

  getImages() {
    const PARAMS = new URLSearchParams({
      key: API_KEY,
      q: this.query,
      page: this.page,
      per_page: this.per_page,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    });

    const url = `${BASE_URL}?${PARAMS}`;
    return fetch(url)
      .then(response => response.json())
      .catch(err => errorShow());
  }

  getPerPage() {
    return this.per_page;
  }
}
