import { FundamentalParticleCreate, FundamentalParticleUpdate } from "@/config/types/atomic/fundamental";
import { FundamentalParticleType, SpinValue } from "@/config/types/atomic/fundamental";

import { DynamicField } from "@/components/Form/types";


export const fundamentalFieldsForCreate = (): DynamicField<FundamentalParticleCreate>[] => [
  { name: "name", label: "Name", required: true, placeholder: "Enter particle name" },
  { name: "symbol", label: "Symbol", required: true, placeholder: "Enter particle symbol" },
  { name: "brief", label: "Brief Description", placeholder: "Enter a brief description", component: "textarea" },
  { name: "description", label: "Description", placeholder: "Enter full description", component: "textarea" },

  {
    name: "particle_type",
    label: "Particle Type",
    required: true,
    component: "dropdown",
    placeholder: "Select particle type",
    options: [
      { value: FundamentalParticleType.QUARK, label: "Quark" },
      { value: FundamentalParticleType.LEPTON, label: "Lepton" },
      { value: FundamentalParticleType.BOSON, label: "Boson" },
      { value: FundamentalParticleType.HIGGS, label: "Higgs" },
    ],
  },

  { name: "mass", label: "Mass (MeV/c²)", type: "number", required: true, placeholder: "Enter mass", step: "any" },
  { name: "charge", label: "Charge (e)", type: "number", required: true, placeholder: "Enter charge", step: "any" },

  {
    name: "spin",
    label: "Spin",
    required: true,
    component: "dropdown",
    placeholder: "Select spin value",
    options: [
      { value: SpinValue.ZERO, label: "0" },
      { value: SpinValue.HALF, label: "1/2" },
      { value: SpinValue.ONE, label: "1" },
      { value: SpinValue.THREE_HALVES, label: "3/2" },
    ],
  },

  { name: "is_antiparticle", label: "Antiparticle?", type: "checkbox" },
  { name: "is_stable", label: "Stable?", type: "checkbox" },
];

export const fundamentalFieldsForUpdate = (): DynamicField<FundamentalParticleUpdate>[] =>
  fundamentalFieldsForCreate() as DynamicField<FundamentalParticleUpdate>[];


export const fundamentalCategoryColors: Record<FundamentalParticleType, string> = {
  [FundamentalParticleType.QUARK]: "bg-red-200 border-red-500 text-red-500",
  [FundamentalParticleType.LEPTON]: "bg-blue-200 border-blue-500 text-blue-500",
  [FundamentalParticleType.BOSON]: "bg-green-200 border-green-500 text-green-500",
  [FundamentalParticleType.HIGGS]: "bg-yellow-200 border-yellow-500 text-yellow-500",
};
