

export interface StateOfMatter {
    id: number;
    name: string;
    slug: string;
    description?: string;
    density_range?: string;
    compressibility?: string;
    energy_level?: number;
    particle_motion?: string;
    intermolecular_forces?: string;
    is_common: boolean;
  }
  
export type StateOfMatterCreate = Omit<StateOfMatter, "id" | "slug">;
  
export type StateOfMatterUpdate = Partial<Omit<StateOfMatter, "id" | "slug">>;
  