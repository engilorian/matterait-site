import axios from "@/config/axiosInstance";
import stateRoutes from "@/config/apiRoutes/routes/state";
import {
  StateOfMatter,
  StateOfMatterCreate,
  StateOfMatterUpdate,
} from "@/config/types/state";


export const getStatesOfMatter = async (
  skip = 0,
  limit = 100
): Promise<StateOfMatter[]> => {
  const response = await axios.get(stateRoutes.state.list, { params: { skip, limit } });
  return response.data;
};

export const getStateOfMatterBySlug = async (
  slug: string
): Promise<StateOfMatter> => {
  const response = await axios.get(stateRoutes.state.getBySlug(slug));
  return response.data;
};

export const createStateOfMatter = async (
  data: StateOfMatterCreate
): Promise<StateOfMatter> => {
  const response = await axios.post(stateRoutes.state.create, data);
  return response.data;
};

export const updateStateOfMatter = async (
  slug: string,
  data: StateOfMatterUpdate
): Promise<StateOfMatter> => {
  const response = await axios.put(stateRoutes.state.update(slug), data);
  return response.data;
};

export const deleteStateOfMatter = async (slug: string): Promise<void> => {
  await axios.delete(stateRoutes.state.delete(slug));
};
