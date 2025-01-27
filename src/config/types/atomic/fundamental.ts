

export enum FundamentalParticleType {
    QUARK = "quark",
    LEPTON = "lepton",
    BOSON = "boson",
    HIGGS = "higgs",
}

export enum SpinValue {
    ZERO = "0",
    HALF = "1/2",
    ONE = "1",
    THREE_HALVES = "3/2",
}

export interface FundamentalComposition {
    subatomic_particle_id: number;
    name: string;
    symbol: string;
    quantity: number;
}

export interface FundamentalParticle {
    id: number;
    name: string;
    brief?: string;
    description?: string;
    symbol: string;
    particle_type: FundamentalParticleType;
    mass: number;
    charge: number;
    spin: SpinValue;
    is_antiparticle: boolean;
    is_stable: boolean;
    compositions?: FundamentalComposition[];
}

export type FundamentalParticleCreate = Omit<FundamentalParticle, "id" | "compositions">;

export type FundamentalParticleUpdate = Partial<Omit<FundamentalParticle, "id">>;
