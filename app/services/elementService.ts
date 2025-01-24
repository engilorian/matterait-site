import axios from "axios";

import apiRoutes from "@/config/apiRoutes";
import { Element, CreateElementInput, UpdateElementInput } from "@/config/types/element";


export const getElements = async (): Promise<Element[]> => {
  console.log("Calling API:", apiRoutes.elements.list);
  const response = await axios.get(apiRoutes.elements.list);
  return response.data;
};

export const getElementById = async (id: number): Promise<Element> => {
  const response = await axios.get(apiRoutes.elements.getById(id));
  return response.data;
};

export const createElement = async (element: CreateElementInput): Promise<Element> => {
  const response = await axios.post(apiRoutes.elements.create, element);
  return response.data;
};

export const updateElement = async ({ id, element }: UpdateElementInput): Promise<Element> => {
  const response = await axios.put(apiRoutes.elements.update(id), element);
  return response.data;
};
