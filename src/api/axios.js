import axios from 'axios';

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "19bc1ee04a053e7f29b5088abe8684bb",
    language: "ko_KR"
  }
})

export default instance;