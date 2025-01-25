import BASE_URL from '../baseUrl';


const buildRoute = (path: string): string => `${BASE_URL}${path}`;

export default buildRoute;
