import { FundamentalParticleType } from "@/config/types/atomic/fundamental";


export const fundamentalParticleTypeColors: Record<FundamentalParticleType, string> = {
    [FundamentalParticleType.QUARK]: "bg-sky-100 border-sky-500 text-sky-500",
    [FundamentalParticleType.LEPTON]: "bg-lime-100 border-lime-500 text-lime-500",
    [FundamentalParticleType.BOSON]: "bg-red-100 border-red-500 text-red-500",
    [FundamentalParticleType.HIGGS]: "bg-yellow-100 border-yellow-500 text-yellow-500",
};

