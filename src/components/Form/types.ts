import { FieldValues, Path } from "react-hook-form";


export interface DynamicField<T extends FieldValues> {
  name: Path<T>;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  step?: number | string;
  component?: "input" | "textarea" | "dropdown";
  options?: { value: string; label: string }[];
}