import axios from 'axios';

export const YOUR_API_KEY = "AIzaSyDSDOnYe9fGY4Xww2-yd5dSHl5gOHkQkEU";

const api = axios.create({
    baseURL: "http://192.168.0.14:8081/"
});

// const apiGoogle = axios.create({
//     baseURL: `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?`
// });

export default api;
// export default apiGoogle;