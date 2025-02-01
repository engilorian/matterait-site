import { ElementCreate } from "@/config/types/atomic/element";

import { DynamicField } from "@/components/Form/Form";


export const elementFields: DynamicField<ElementCreate>[] = [
  {
    name: "name",
    label: "Name",
    required: true,
    placeholder: "Enter element name",
  },
  {
    name: "symbol",
    label: "Symbol",
    required: true,
    placeholder: "Enter chemical symbol",
  },
  {
    name: "brief",
    label: "Brief Description",
    placeholder: "Enter a brief description",
  },
  {
    name: "description",
    label: "Description",
    placeholder: "Enter full description",
  },
  {
    name: "atomic_number",
    label: "Atomic Number",
    type: "number",
    required: true,
    placeholder: "Enter atomic number",
  },
  {
    name: "atomic_mass",
    label: "Atomic Mass",
    type: "number",
    required: true,
    placeholder: "Enter atomic mass",
  },
];

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