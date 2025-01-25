import { SpinValue } from "@/config/types/atomic/fundamental";


export enum SubatomicParticleType {
    HADRON = "hadron",
    MESON = "meson",
    BARYON = "baryon",
}

export interface SubatomicParticle {
  id: number;
  name: string;
  description?: string;
  symbol: string;
  particle_type: SubatomicParticleType;
  mass: number;
  charge: number;
  spin: SpinValue;
  color_charge?: string;
  is_antiparticle: boolean;
  is_stable: boolean;
  fundamental_particle_id: number;
}

export type SubatomicParticleCreate = Omit<SubatomicParticle, "id">;

export type SubatomicParticleUpdate = Partial<Omit<SubatomicParticle, "id">>;
