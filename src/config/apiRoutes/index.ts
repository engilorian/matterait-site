import atomicRoutes from "./routes/atomic";
import quantumRoutes from "./routes/quantum";
import stateRoutes from "./routes/state";


const apiRoutes = {
  atomic: atomicRoutes,
  quantum: quantumRoutes,
  states: stateRoutes,
};

export default apiRoutes;
