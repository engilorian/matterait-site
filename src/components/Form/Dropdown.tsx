"use client";

import React from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";

import { DynamicField } from "./types";


interface DropdownFieldProps<T extends FieldValues> {
  field: DynamicField<T>;
  register: UseFormRegister<T>;
  options: { value: string; label: string }[];
}

export default function DropdownField<T extends FieldValues>({
  field,
  register,
  options,
}: DropdownFieldProps<T>) {
  return (
    <div className="mb-4">
      <label className="block font-secondary text-zinc-700 mb-1">{field.label}</label>
      <select {...register(field.name)} className="border-4 rounded-lg focus:outline-none font-secondary p-2 w-full">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
