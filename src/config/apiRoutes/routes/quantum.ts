import buildRoute from '../utils';


const BASE = buildRoute('/quantum');

const quantumRoutes = {
  base: BASE,
  phenomena: {
    list: `${BASE}/phenomena`,
    getBySlug: (slug: string): string => `${BASE}/phenomena/${slug}`,
    create: `${BASE}/phenomena`,
    update: (slug: string): string => `${BASE}/phenomena/${slug}`,
    delete: (slug: string): string => `${BASE}/phenomena/${slug}`,
  },
};

export default quantumRoutes;
