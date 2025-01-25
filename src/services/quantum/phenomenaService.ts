import axios from "@/config/axiosInstance";
import quantumRoutes from "@/config/apiRoutes/routes/quantum";
import {
  QuantumPhenomenon,
  QuantumPhenomenonCreate,
  QuantumPhenomenonUpdate,
} from "@/config/types/quantum";


export const getQuantumPhenomena = async (
  skip = 0,
  limit = 100
): Promise<QuantumPhenomenon[]> => {
  const response = await axios.get(quantumRoutes.phenomena.list, { params: { skip, limit } });
  return response.data;
};

export const getQuantumPhenomenonBySlug = async (
  slug: string
): Promise<QuantumPhenomenon> => {
  const response = await axios.get(quantumRoutes.phenomena.getBySlug(slug));
  return response.data;
};

export const createQuantumPhenomenon = async (
  data: QuantumPhenomenonCreate
): Promise<QuantumPhenomenon> => {
  const response = await axios.post(quantumRoutes.phenomena.create, data);
  return response.data;
};

export const updateQuantumPhenomenon = async (
  slug: string,
  data: QuantumPhenomenonUpdate
): Promise<QuantumPhenomenon> => {
  const response = await axios.put(quantumRoutes.phenomena.update(slug), data);
  return response.data;
};

export const deleteQuantumPhenomenon = async (slug: string): Promise<void> => {
  await axios.delete(quantumRoutes.phenomena.delete(slug));
};
