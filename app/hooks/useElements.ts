import { useQuery, useMutation, useQueryClient } from "react-query";

import {
  getElements,
  getElementById,
  createElement,
  updateElement,
} from "@/services/elementService";
import { Element, CreateElementInput, UpdateElementInput } from "@/config/types/element";


export const useElements = () => {
  console.log("Fetching from:", getElements);
  return useQuery<Element[], Error>("elements", getElements);
};

export const useElement = (id: number) => {
  return useQuery<Element, Error>(["element", id], () => getElementById(id));
};

export const useCreateElement = () => {
  const queryClient = useQueryClient();
  return useMutation<Element, Error, CreateElementInput>(createElement, {
    onSuccess: () => {
      queryClient.invalidateQueries("elements");
    },
  });
};

export const useUpdateElement = () => {
  const queryClient = useQueryClient();
  return useMutation<Element, Error, UpdateElementInput>(updateElement, {
    onSuccess: () => {
      queryClient.invalidateQueries("elements");
    },
  });
};
