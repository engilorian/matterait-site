import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  getQuantumPhenomena,
  getQuantumPhenomenonBySlug,
  createQuantumPhenomenon,
  updateQuantumPhenomenon,
  deleteQuantumPhenomenon,
} from "@/services/quantum/phenomenaService";
import {
  QuantumPhenomenon,
  QuantumPhenomenonCreate,
  QuantumPhenomenonUpdate,
} from "@/config/types/quantum";


export const useQuantumPhenomena = (skip = 0, limit = 100) => {
  return useQuery<QuantumPhenomenon[], Error>(["phenomena", skip, limit], () =>
    getQuantumPhenomena(skip, limit)
  );
};

export const useQuantumPhenomenon = (slug: string) => {
  return useQuery<QuantumPhenomenon, Error>(
    ["phenomenon", slug],
    () => getQuantumPhenomenonBySlug(slug),
    {
      enabled: !!slug,
    }
  );
};

export const useCreateQuantumPhenomenon = () => {
  const queryClient = useQueryClient();
  return useMutation<QuantumPhenomenon, Error, QuantumPhenomenonCreate>(createQuantumPhenomenon, {
    onSuccess: () => {
      queryClient.invalidateQueries("phenomena");
    },
  });
};

export const useUpdateQuantumPhenomenon = () => {
  const queryClient = useQueryClient();
  return useMutation<
    QuantumPhenomenon,
    Error,
    { slug: string; data: QuantumPhenomenonUpdate }
  >(({ slug, data }) => updateQuantumPhenomenon(slug, data), {
    onSuccess: () => {
      queryClient.invalidateQueries("phenomena");
    },
  });
};

export const useDeleteQuantumPhenomenon = () => {
  const queryClient = useQueryClient();
  return useMutation<void, Error, string>(deleteQuantumPhenomenon, {
    onSuccess: () => {
      queryClient.invalidateQueries("phenomena");
    },
  });
};
