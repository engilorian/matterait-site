import { SubatomicParticleCreate, SubatomicParticleUpdate, SubatomicParticleType } from "@/config/types/atomic/subatomic";
import { SpinValue } from "@/config/types/atomic/fundamental";

import { DynamicField } from "@/components/Form/types";


export const subatomicFieldsForCreate = (): DynamicField<SubatomicParticleCreate>[] => [
  { name: "name", label: "Name", required: true, placeholder: "Enter subatomic particle name" },
  { name: "variant", label: "Variant", placeholder: "Variant of subatomic (e.g. 1690)" },
  { name: "symbol", label: "Symbol", required: true, placeholder: "Enter symbol" },
  { name: "brief", label: "Brief Description", placeholder: "Enter a brief description", component: "textarea" },
  { name: "description", label: "Description", placeholder: "Enter full description", component: "textarea" },

  {
    name: "particle_type",
    label: "Particle Type",
    required: true,
    component: "dropdown",
    placeholder: "Select particle type",
    options: [
      { value: SubatomicParticleType.HADRON, label: "Hadron" },
      { value: SubatomicParticleType.MESON, label: "Meson" },
      { value: SubatomicParticleType.BARYON, label: "Baryon" },
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

export const subatomicFieldsForUpdate = (): DynamicField<SubatomicParticleUpdate>[] =>
  subatomicFieldsForCreate() as DynamicField<SubatomicParticleUpdate>[];


export const subatomicCategoryColors: Record<SubatomicParticleType, string> = {
  [SubatomicParticleType.HADRON]: "bg-red-200 border-red-500 text-red-500",
  [SubatomicParticleType.MESON]: "bg-blue-200 border-blue-500 text-blue-500",
  [SubatomicParticleType.BARYON]: "bg-green-200 border-green-500 text-green-500",
};
