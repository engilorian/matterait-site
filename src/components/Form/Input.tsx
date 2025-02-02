"use client";

import React from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";

import { DynamicField } from "./types";


interface InputFieldProps<T extends FieldValues> {
  field: DynamicField<T>;
  register: UseFormRegister<T>;
  error?: string;
}

export default function InputField<T extends FieldValues>({
  field,
  register,
  error,
}: InputFieldProps<T>) {
  return (
    <div className="mb-4">
      <label className="block font-semibold mb-1">{field.label}</label>
      <input
        type={field.type ?? "text"}
        className="border p-2 w-full"
        placeholder={field.placeholder}
        step={field.step}
        {...register(field.name, { required: field.required })}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
