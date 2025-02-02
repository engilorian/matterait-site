"use client";

import React from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";

import { DynamicField } from "./types";


interface TextAreaFieldProps<T extends FieldValues> {
  field: DynamicField<T>;
  register: UseFormRegister<T>;
  error?: string;
}

export default function TextAreaField<T extends FieldValues>({
  field,
  register,
  error,
}: TextAreaFieldProps<T>) {
  return (
    <div className="mb-4">
      <label className="block font-semibold mb-1">{field.label}</label>
      <textarea
        className="border p-2 w-full"
        placeholder={field.placeholder}
        {...register(field.name, { required: field.required })}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
