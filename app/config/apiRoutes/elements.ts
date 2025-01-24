import BASE_URL from "@/config/baseUrl";


const elementRoutes = {
  list: `${BASE_URL}/elements`,
  getById: (id: number) => `${BASE_URL}/elements/${id}`,
  create: `${BASE_URL}/elements`,
  update: (id: number) => `${BASE_URL}/elements/${id}`,
};

export default elementRoutes;
