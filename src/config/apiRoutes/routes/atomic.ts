import buildRoute from '../utils';


const BASE = buildRoute('/atomic');

const atomicRoutes = {
  base: BASE,
  element: {
    list: `${BASE}/elements`,
    getById: (id: number): string => `${BASE}/elements/${id}`,
    create: `${BASE}/elements`,
    update: (id: number): string => `${BASE}/elements/${id}`,
    delete: (id: number): string => `${BASE}/elements/${id}`,
  },
  fundamental: {
    list: `${BASE}/fundamentals`,
    getById: (id: number): string => `${BASE}/fundamentals/${id}`,
    create: `${BASE}/fundamentals`,
    update: (id: number): string => `${BASE}/fundamentals/${id}`,
    delete: (id: number): string => `${BASE}/fundamentals/${id}`,
  },
  subatomic: {
    list: `${BASE}/subatomics`,
    getById: (id: number): string => `${BASE}/subatomics/${id}`,
    create: `${BASE}/subatomics`,
    update: (id: number): string => `${BASE}/subatomics/${id}`,
    delete: (id: number): string => `${BASE}/subatomics/${id}`,
  },
};

export default atomicRoutes;
