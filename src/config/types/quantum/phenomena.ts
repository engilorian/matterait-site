

export interface QuantumPhenomenon {
    id: number;
    name: string;
    slug: string;
    brief?: string;
    description?: string;
    examples?: string;
    is_common: boolean;
}
  
export type QuantumPhenomenonCreate = Omit<QuantumPhenomenon, "id" | "slug">;
  
export type QuantumPhenomenonUpdate = Partial<Omit<QuantumPhenomenon, "id" | "slug">>;
  