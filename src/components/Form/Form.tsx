"use client";

import React from "react";
import {
  useForm,
  SubmitHandler,
  FieldValues,
  DefaultValues,
} from "react-hook-form";

import { DynamicField } from "./types";

import Button from "@/components/Button";
import InputField from "./Input";
import TextAreaField from "./TextArea";
import DropdownField from "./Dropdown";


export interface FormProps<T extends FieldValues> {
  fields: DynamicField<T>[];
  defaultValues?: DefaultValues<T>;
  onSubmit: (values: T) => void;
  submitText?: string;
  isLoading?: boolean;
}

export default function Form<T extends FieldValues>({
  fields,
  defaultValues,
  onSubmit,
  submitText = "Submit",
  isLoading = false,
}: FormProps<T>) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<T>({ defaultValues });

  const handleFormSubmit: SubmitHandler<T> = (data) => onSubmit(data);

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      {fields.map((field) => {
        const errorMessage = errors[field.name]?.message as string | undefined;
        if (field.component === "textarea") {
          return (
            <TextAreaField
              key={field.name}
              field={field}
              register={register}
              error={errorMessage}
            />
          );
        }
        if (field.component === "dropdown") {
          return (
            <DropdownField
              key={field.name}
              field={field}
              register={register}
              options={field.options || []}
            />
          );
        }
        return (
          <InputField
            key={field.name}
            field={field}
            register={register}
            error={errorMessage}
          />
        );
      })}
      <Button type="submit" disabled={isLoading}>
        {submitText}
      </Button>
    </form>
  );
}
