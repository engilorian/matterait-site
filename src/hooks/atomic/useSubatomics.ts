import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  getSubatomicParticles,
  getSubatomicParticleById,
  createSubatomicParticle,
  updateSubatomicParticle,
  deleteSubatomicParticle,
} from "@/services/atomic/subatomicService";
import {
  SubatomicParticle,
  SubatomicParticleCreate,
  SubatomicParticleUpdate,
} from "@/config/types/atomic/subatomic";


export const useSubatomicParticles = (skip = 0, limit = 100) => {
  return useQuery<SubatomicParticle[], Error>(["subatomics", skip, limit], () =>
    getSubatomicParticles(skip, limit)
  );
};

export const useSubatomicParticle = (id: number) => {
  return useQuery<SubatomicParticle, Error>(["subatomic", id], () => getSubatomicParticleById(id), {
    enabled: !!id,
  });
};

export const useCreateSubatomicParticle = () => {
  const queryClient = useQueryClient();
  return useMutation<SubatomicParticle, Error, SubatomicParticleCreate>(createSubatomicParticle, {
    onSuccess: () => {
      queryClient.invalidateQueries("subatomics");
    },
  });
};

export const useUpdateSubatomicParticle = () => {
  const queryClient = useQueryClient();
  return useMutation<SubatomicParticle, Error, { id: number; data: SubatomicParticleUpdate }>(
    ({ id, data }) => updateSubatomicParticle(id, data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("subatomics");
      },
    }
  );
};

export const useDeleteSubatomicParticle = () => {
  const queryClient = useQueryClient();
  return useMutation<void, Error, number>(deleteSubatomicParticle, {
    onSuccess: () => {
      queryClient.invalidateQueries("subatomics");
    },
  });
};
