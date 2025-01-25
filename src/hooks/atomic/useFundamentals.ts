import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  getFundamentalParticles,
  getFundamentalParticleById,
  createFundamentalParticle,
  updateFundamentalParticle,
  deleteFundamentalParticle,
} from "@/services/atomic/fundamentalService";
import {
  FundamentalParticle,
  FundamentalParticleCreate,
  FundamentalParticleUpdate,
} from "@/config/types/atomic/fundamental";


export const useFundamentalParticles = (skip = 0, limit = 100) => {
  return useQuery<FundamentalParticle[], Error>(["fundamentals", skip, limit], () =>
    getFundamentalParticles(skip, limit)
  );
};


export const useFundamentalParticle = (id: number) => {
  return useQuery<FundamentalParticle, Error>(["fundamental", id], () => getFundamentalParticleById(id), {
    enabled: !!id,
  });
};

export const useCreateFundamentalParticle = () => {
  const queryClient = useQueryClient();
  return useMutation<FundamentalParticle, Error, FundamentalParticleCreate>(createFundamentalParticle, {
    onSuccess: () => {
      queryClient.invalidateQueries("fundamentals");
    },
  });
};

export const useUpdateFundamentalParticle = () => {
  const queryClient = useQueryClient();
  return useMutation<FundamentalParticle, Error, { id: number; data: FundamentalParticleUpdate }>(
    ({ id, data }) => updateFundamentalParticle(id, data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("fundamentals");
      },
    }
  );
};

export const useDeleteFundamentalParticle = () => {
  const queryClient = useQueryClient();
  return useMutation<void, Error, number>(deleteFundamentalParticle, {
    onSuccess: () => {
      queryClient.invalidateQueries("fundamentals");
    },
  });
};
