import { ElementCreate, ElementUpdate } from "@/config/types/atomic/element";
import { DynamicField } from "@/components/Form/types";


export const elementFieldsForCreate = (stateOptions: { value: string; label: string }[]): DynamicField<ElementCreate>[] => [
  { name: "name", label: "Name", required: true, placeholder: "Enter element name" },
  { name: "symbol", label: "Symbol", required: true, placeholder: "Enter chemical symbol" },
  { name: "brief", label: "Brief Description", placeholder: "Enter a brief description", component: "textarea" },
  { name: "description", label: "Description", placeholder: "Enter full description", component: "textarea" },

  { name: "atomic_number", label: "Atomic Number", type: "number", required: true, placeholder: "Enter atomic number", step: 1 },
  { name: "atomic_mass", label: "Atomic Mass", type: "number", required: true, placeholder: "Enter atomic mass", step: "any" },
  { name: "electron_configuration", label: "Electron Configuration", placeholder: "Enter electron configuration" },
  { name: "valence_electrons", label: "Valence Electrons", type: "number", placeholder: "Enter number of valence electrons", step: 1 },
  { name: "oxidation_states", label: "Oxidation States", placeholder: "Enter oxidation states (comma-separated)" },
  { name: "reactivity", label: "Reactivity", placeholder: "Describe the reactivity of the element" },

  {
    name: "category",
    label: "Category",
    required: true,
    component: "dropdown",
    placeholder: "Select category",
    options: [
      { value: "Alkali Metal", label: "Alkali Metal" },
      { value: "Alkaline Earth Metal", label: "Alkaline Earth Metal" },
      { value: "Transition Metal", label: "Transition Metal" },
      { value: "Post Transition Metal", label: "Post Transition Metal" },
      { value: "Metalloid", label: "Metalloid" },
      { value: "Reactive Nonmetal", label: "Reactive Nonmetal" },
      { value: "Noble Gas", label: "Noble Gas" },
    ],
  },

  {
    name: "group",
    label: "Group",
    required: true,
    component: "dropdown",
    placeholder: "Select group",
    options: [
      { value: "Group 1", label: "Group 1" },
      { value: "Group 2", label: "Group 2" },
      { value: "Group 3", label: "Group 3" },
      { value: "Group 4", label: "Group 4" },
      { value: "Group 5", label: "Group 5" },
      { value: "Group 6", label: "Group 6" },
      { value: "Group 7", label: "Group 7" },
      { value: "Group 8", label: "Group 8" },
      { value: "Group 9", label: "Group 9" },
      { value: "Group 10", label: "Group 10" },
      { value: "Group 11", label: "Group 11" },
      { value: "Group 12", label: "Group 12" },
      { value: "Group 13", label: "Group 13" },
      { value: "Group 14", label: "Group 14" },
      { value: "Group 15", label: "Group 15" },
      { value: "Group 16", label: "Group 16" },
      { value: "Group 17", label: "Group 17" },
      { value: "Group 18", label: "Group 18" },
      { value: "Lanthanides", label: "Lanthanides" },
      { value: "Actinides", label: "Actinides" },
      { value: "Other", label: "Other" },
    ],
  },

  { name: "period", label: "Period", type: "number", placeholder: "Enter period number", step: 1 },

  { name: "density", label: "Density (g/cm³)", type: "number", placeholder: "Enter density", step: "any" },
  { name: "melting_point", label: "Melting Point (K)", type: "number", placeholder: "Enter melting point", step: "any" },
  { name: "boiling_point", label: "Boiling Point (K)", type: "number", placeholder: "Enter boiling point", step: "any" },

  {
    name: "state_id",
    label: "State of Matter",
    component: "dropdown",
    placeholder: "Select state",
    options: stateOptions,
  },

  { name: "electronegativity", label: "Electronegativity", type: "number", placeholder: "Enter electronegativity", step: "any" },
  { name: "ionization_energy", label: "Ionization Energy (kJ/mol)", type: "number", placeholder: "Enter ionization energy", step: "any" },
  { name: "atomic_radius", label: "Atomic Radius (pm)", type: "number", placeholder: "Enter atomic radius", step: "any" },

  { name: "heat_capacity", label: "Heat Capacity (J/g·K)", type: "number", placeholder: "Enter heat capacity", step: "any" },
  { name: "thermal_conductivity", label: "Thermal Conductivity (W/m·K)", type: "number", placeholder: "Enter thermal conductivity", step: "any" },

  { name: "electrical_conductivity", label: "Electrical Conductivity (S/m)", type: "number", placeholder: "Enter electrical conductivity", step: "any" },

  { name: "occurrence", label: "Occurrence", placeholder: "Where is this element found?" },
  { name: "radioactivity", label: "Radioactive?", type: "checkbox" },
];

export const elementFieldsForUpdate = (stateOptions: { value: string; label: string }[]): DynamicField<ElementUpdate>[] =>
  elementFieldsForCreate(stateOptions) as DynamicField<ElementUpdate>[];

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