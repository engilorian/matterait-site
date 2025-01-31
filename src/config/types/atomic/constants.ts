import { FundamentalParticleType } from "@/config/types/atomic/fundamental";


export const elementCategoryColors: Record<string, string> = {
    "Alkali Metal": "bg-pink-200 border-pink-500 text-pink-500",
    "Metalloid": "bg-green-200 border-green-500 text-green-500",
    "Actinide": "bg-purple-200 border-purple-500 text-purple-500",
    "Alkaline Earth Metal": "bg-yellow-200 border-yellow-500 text-yellow-500",
    "Reactive Nonmetal": "bg-blue-200 border-blue-500 text-blue-500",
    "Transition Metal": "bg-orange-200 border-orange-500 text-orange-500",
    "Noble Gas": "bg-yellow-200 border-yellow-500 text-yellow-500",
    "Post Transition Metal": "bg-pink-200 border-pink-500 text-pink-500",
    "Lanthanide": "bg-indigo-200 border-indigo-500 text-indigo-500",
    "Unknown Properties": "bg-gray-200 border-gray-500 text-gray-500",
};


export const fundamentalParticleTypeColors: Record<FundamentalParticleType, string> = {
    [FundamentalParticleType.QUARK]: "bg-sky-50 border-sky-500 text-sky-500",
    [FundamentalParticleType.LEPTON]: "bg-lime-50 border-lime-500 text-lime-500",
    [FundamentalParticleType.BOSON]: "bg-red-50 border-red-500 text-red-500",
    [FundamentalParticleType.HIGGS]: "bg-yellow-50 border-yellow-500 text-yellow-500",
  };