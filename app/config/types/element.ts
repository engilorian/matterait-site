

export interface Element {
    id: number;
    name: string;
    atomicNumber: number;
}
  
export interface CreateElementInput {
    name: string;
    atomicNumber: number;
}
  
export interface UpdateElementInput {
    id: number;
    element: CreateElementInput;
}
  