

export interface Element {
    id: number;
    name: string;
    description?: string;
    symbol: string;
    atomic_number: number;
    atomic_mass: number;
    group?: number;
    period?: number;
    density?: number;
    melting_point?: number;
    boiling_point?: number;
    state?: string;
    electronegativity?: number;
    ionization_energy?: number;
    atomic_radius?: number;
    electron_configuration?: string;
    valence_electrons?: number;
    oxidation_states?: string;
    reactivity?: string;
    occurrence?: string;
    radioactivity: boolean;
    category?: string;
    heat_capacity?: number;
    thermal_conductivity?: number;
    electrical_conductivity?: number;
  }
  
  export type ElementCreate = Omit<Element, 'id'>;
  
  export type ElementUpdate = Partial<Omit<Element, 'id'>>;
  