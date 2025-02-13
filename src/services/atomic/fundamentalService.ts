import axios from "@/config/axiosInstance";
import atomicRoutes from "@/config/apiRoutes/routes/atomic";
import {
  FundamentalParticle,
  FundamentalParticleCreate,
  FundamentalParticleUpdate,
} from "@/config/types/atomic/fundamental";


export const getFundamentalParticles = async (skip = 0, limit = 100): Promise<FundamentalParticle[]> => {
  const response = await axios.get(atomicRoutes.fundamental.list, { params: { skip, limit } });
  return response.data;
};

export const getFundamentalParticleById = async (id: number): Promise<FundamentalParticle> => {
  const response = await axios.get(atomicRoutes.fundamental.getById(id));
  return response.data;
};

export const createFundamentalParticle = async (data: FundamentalParticleCreate): Promise<FundamentalParticle> => {
  const response = await axios.post(atomicRoutes.fundamental.create, data);
  return response.data;
};

export const updateFundamentalParticle = async (id: number,data: FundamentalParticleUpdate): Promise<FundamentalParticle> => {
  const response = await axios.put(atomicRoutes.fundamental.update(id), data);
  return response.data;
};

export const deleteFundamentalParticle = async (id: number): Promise<void> => {
  await axios.delete(atomicRoutes.fundamental.delete(id));
};
