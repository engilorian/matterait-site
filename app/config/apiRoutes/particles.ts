import BASE_URL from "@/config/baseUrl";


const particleRoutes = {
  list: `${BASE_URL}/particles`,
  getById: (id: number) => `${BASE_URL}/particles/${id}`,
  create: `${BASE_URL}/particles`,
  update: (id: number) => `${BASE_URL}/particles/${id}`,
};

export default particleRoutes;
