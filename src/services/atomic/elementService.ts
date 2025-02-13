import axios from "@/config/axiosInstance";

import atomicRoutes from "@/config/apiRoutes/routes/atomic";
import { 
  Element, 
  ElementCreate, 
  ElementUpdate 
} from "@/config/types/atomic/element";


export const getElements = async (skip = 0, limit = 100): Promise<Element[]> => {
  const response = await axios.get(atomicRoutes.element.list, { params: { skip, limit } });
  return response.data;
};

export const getElementById = async (id: number): Promise<Element> => {
  const response = await axios.get(atomicRoutes.element.getById(id));
  return response.data;
};

export const createElement = async (data: ElementCreate): Promise<Element> => {
  const response = await axios.post(atomicRoutes.element.create, data);
  return response.data;
};

export const updateElement = async (id: number, data: ElementUpdate): Promise<Element> => {
  const response = await axios.put(atomicRoutes.element.update(id), data);
  return response.data;
};

export const deleteElement = async (id: number): Promise<void> => {
  await axios.delete(atomicRoutes.element.delete(id));
};
