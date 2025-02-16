import { SpinValue } from "@/config/types/atomic/fundamental";


export enum SubatomicParticleType {
  HADRON = "hadron",
  MESON = "meson",
  BARYON = "baryon",
}

export interface SubatomicComposition {
  fundamental_particle_id: number;
  name: string;
  symbol: string;
  quantity: number;
}

export interface SubatomicParticle {
  id: number;
  full_name: string;
  full_symbol: string;
  name: string;
  variant: string;
  brief?: string;
  description?: string;
  symbol: string;
  particle_type: SubatomicParticleType;
  mass: number;
  charge: number;
  spin: SpinValue;
  is_antiparticle: boolean;
  is_stable: boolean;
  compositions: SubatomicComposition[];
}

export type SubatomicParticleCreate = Omit<SubatomicParticle, "id" | "full_name" | "full_symbol">;
export type SubatomicParticleUpdate = Partial<Omit<SubatomicParticle, "id" | "full_name" | "full_symbol">>;
