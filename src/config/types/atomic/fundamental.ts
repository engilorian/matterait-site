

export enum FundamentalParticleType {
    FERMION = "fermion",
    BOSON = "boson",
}
  
export enum SpinValue {
    ZERO = "0",
    HALF = "1/2",
    ONE = "1",
    THREE_HALVES = "3/2",
}
  
export interface FundamentalParticle {
    id: number;
    name: string;
    description?: string;
    symbol: string;
    particle_type: FundamentalParticleType;
    mass: number;
    charge: number;
    spin: SpinValue;
    color_charge?: string;
    is_antiparticle: boolean;
    is_stable: boolean;
}
  
export type FundamentalParticleCreate = Omit<FundamentalParticle, "id">;

export type FundamentalParticleUpdate = Partial<Omit<FundamentalParticle, "id">>;
  