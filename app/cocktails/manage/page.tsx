"use client";

import { FieldWrapper } from "@/components/form/field-wrapper";
import { RadioGroup } from "@/components/form/radio-group";
import { ingredientTypes, yesOrNoOptions } from "@/lib/form-data";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().required("Required"),
    type: yup.string(),
    inStock: yup.boolean(),
  })
  .required();

export default function CocktailsManagePage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      type: "",
      inStock: true,
    },
    resolver: yupResolver(schema),
  });

  const onSubmitValid: Parameters<typeof handleSubmit>[0] = (data) => {
    console.log(data);
  };

  const onSubmitInvalid: Parameters<typeof handleSubmit>[1] = (errors) => {
    console.error(errors);
  };

  return (
    <section>
      <h1 className="mb-8 text-2xl">Add a new ingredient</h1>
      <div className="w-full max-w-xs">
        <form
          className="mb-4 w-full"
          onSubmit={handleSubmit(onSubmitValid, onSubmitInvalid)}
        >
          <FieldWrapper
            inputId="name"
            label="Ingredient name"
            invalid={!!errors.name}
            errorMessage={errors.name?.message}
          >
            <input
              id="name"
              type="text"
              data-error={!!errors.name}
              {...register("name")}
            />
          </FieldWrapper>

          <RadioGroup
            id="type"
            legend="Ingredient type"
            invalid={!!errors.type}
            errorMessage={errors.type?.message}
            options={ingredientTypes}
            registerReturn={register("type")}
          />

          <RadioGroup
            id="in-stock"
            legend="In stock?"
            options={yesOrNoOptions}
            registerReturn={register("inStock")}
          />

          <div className="flex items-center justify-between">
            <button
              className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-700 focus:outline-none"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
