import buildRoute from '../utils';


const BASE = buildRoute('/state');

const stateRoutes = {
  base: BASE,
  state: {
    list: `${BASE}/`,
    getBySlug: (slug: string): string => `${BASE}/${slug}`,
    create: `${BASE}`,
    update: (slug: string): string => `${BASE}/${slug}`,
    delete: (slug: string): string => `${BASE}/${slug}`,
  },
};

export default stateRoutes;
