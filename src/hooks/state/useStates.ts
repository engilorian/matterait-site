import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  getStatesOfMatter,
  getStateOfMatterBySlug,
  createStateOfMatter,
  updateStateOfMatter,
  deleteStateOfMatter,
} from "@/services/state/stateService";
import {
  StateOfMatter,
  StateOfMatterCreate,
  StateOfMatterUpdate,
} from "@/config/types/state";


export const useStatesOfMatter = (skip = 0, limit = 100) => {
  return useQuery<StateOfMatter[], Error>(["states", skip, limit], () =>
    getStatesOfMatter(skip, limit)
  );
};


export const useStateOfMatter = (slug: string) => {
  return useQuery<StateOfMatter, Error>(["state", slug], () => getStateOfMatterBySlug(slug), {
    enabled: !!slug,
  });
};

export const useCreateStateOfMatter = () => {
  const queryClient = useQueryClient();
  return useMutation<StateOfMatter, Error, StateOfMatterCreate>(createStateOfMatter, {
    onSuccess: () => {
      queryClient.invalidateQueries("states");
    },
  });
};

export const useUpdateStateOfMatter = () => {
  const queryClient = useQueryClient();
  return useMutation<StateOfMatter, Error, { slug: string; data: StateOfMatterUpdate }>(
    ({ slug, data }) => updateStateOfMatter(slug, data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("states");
      },
    }
  );
};

export const useDeleteStateOfMatter = () => {
  const queryClient = useQueryClient();
  return useMutation<void, Error, string>(deleteStateOfMatter, {
    onSuccess: () => {
      queryClient.invalidateQueries("states");
    },
  });
};
