import axios from "@/config/axiosInstance";
import atomicRoutes from "@/config/apiRoutes/routes/atomic";
import {
  SubatomicParticle,
  SubatomicParticleCreate,
  SubatomicParticleUpdate,
} from "@/config/types/atomic/subatomic";


export const getSubatomicParticles = async (
  skip = 0,
  limit = 100
): Promise<SubatomicParticle[]> => {
  const response = await axios.get(atomicRoutes.subatomic.list, { params: { skip, limit } });
  return response.data;
};

export const getSubatomicParticleById = async (
  id: number
): Promise<SubatomicParticle> => {
  const response = await axios.get(atomicRoutes.subatomic.getById(id));
  return response.data;
};

export const createSubatomicParticle = async (
  data: SubatomicParticleCreate
): Promise<SubatomicParticle> => {
  const response = await axios.post(atomicRoutes.subatomic.create, data);
  return response.data;
};

export const updateSubatomicParticle = async (
  id: number,
  data: SubatomicParticleUpdate
): Promise<SubatomicParticle> => {
  const response = await axios.put(atomicRoutes.subatomic.update(id), data);
  return response.data;
};

export const deleteSubatomicParticle = async (id: number): Promise<void> => {
  await axios.delete(atomicRoutes.subatomic.delete(id));
};
