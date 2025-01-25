import { useQuery, useMutation, useQueryClient } from "react-query";

import {
  getElements,
  getElementById,
  createElement,
  updateElement,
  deleteElement,
} from "@/services/atomic/elementService";
import { Element, ElementCreate, ElementUpdate } from "@/config/types/atomic/element";


export const useElements = (skip = 0, limit = 100) => {
  return useQuery<Element[], Error>(['elements', skip, limit], () => getElements(skip, limit));
};

export const useElement = (id: number) => {
  return useQuery<Element, Error>(['element', id], () => getElementById(id), {
    enabled: !!id, 
  });
};

export const useCreateElement = () => {
  const queryClient = useQueryClient();
  return useMutation<Element, Error, ElementCreate>(createElement, {
    onSuccess: () => {
      queryClient.invalidateQueries('elements');
    },
  });
};

export const useUpdateElement = () => {
  const queryClient = useQueryClient();
  return useMutation<Element, Error, { id: number; data: ElementUpdate }>(
    ({ id, data }) => updateElement(id, data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('elements');
      },
    }
  );
};

export const useDeleteElement = () => {
  const queryClient = useQueryClient();
  return useMutation<void, Error, number>(deleteElement, {
    onSuccess: () => {
      queryClient.invalidateQueries('elements');
    },
  });
};
