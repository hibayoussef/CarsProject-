import axios from './axiosConfig.js';

export default axios.create({
  baseURL: "http://localhost:4000/",
  headers: {
    "Content-type": "application/json",
  }
});

// create new axios instance
// const api = axios.create({
//   withCredentials: true,
//   credentials: 'same-origin',
// })

// export default api
