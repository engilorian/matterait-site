import { FieldValues } from "react-hook-form";


export const sanitizeData = <T extends FieldValues>(data: T): T => {
  return Object.fromEntries(
    Object.entries(data).map(([key, value]) => [
      key,
      value === "" ? undefined : value,
    ])
  ) as T;
};

export const parseNumbers = <T extends FieldValues>(data: T): T => {
  return Object.fromEntries(
    Object.entries(data).map(([key, value]) => {
      if (key === "spin") {
        return [key, value];
      }
      if (typeof value === "string" && value.trim() !== "" && !isNaN(Number(value))) {
        return [key, Number(value)];
      }
      return [key, value];
    })
  ) as T;
};

export const transformFormData = <T extends FieldValues>(data: T): T => {
  return parseNumbers(sanitizeData(data));
};
