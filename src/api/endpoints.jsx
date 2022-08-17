const BASE_API = import.meta.env.VITE_API_URL;

const API_CONSTANT_MAP = {
  hero: `${BASE_API}/api/hero`,
  headings: `${BASE_API}/api/headings`,
  about: `${BASE_API}/api/about`,
  cars: `${BASE_API}/api/cars?populate=*`,
  car: `${BASE_API}/api/cars/${id}?populate=*`,
  reviews: `${BASE_API}/api/reviews`,
  findUS: `${BASE_API}/api/find-us`,
  contact: `${BASE_API}/api/contact`,
  hours: `${BASE_API}/api/hours`,
};

export default API_CONSTANT_MAP;
