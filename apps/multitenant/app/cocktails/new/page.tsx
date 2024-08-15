"use client";

import { FieldWrapper } from "../../../components/form/field-wrapper";
import { FieldSet } from "../../../components/form/fieldset";
import { amountUnitOptions, emptyIngredient } from "../../../lib/form-data";
import { cn } from "../../../lib/utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { Check, Pencil, Trash2 } from "lucide-react";
import { MouseEventHandler, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().required("Required"),
    description: yup.string().required("Required"),
    ingredients: yup
      .array()
      .min(1)
      .of(
        yup.object({
          name: yup.string().required("Required"),
          amount: yup
            .number()
            .typeError("Required")
            .moreThan(0, "Must be > 0")
            .required("Required"),
          amountUnit: yup.string().required("Required"),
        })
      )
      .required(),
  })
  .required();

export default function CocktailsNewPage() {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      description: "",
      ingredients: [emptyIngredient],
    },
    resolver: yupResolver(schema),
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "ingredients",
  });
  const [editingIngredientIndex, setEditingIngredientIndex] = useState<
    number | null
  >(0);

  const handleAddIngredientClick: MouseEventHandler<HTMLButtonElement> = (
    e
  ) => {
    e.preventDefault();
    setEditingIngredientIndex(fields.length);
    append(emptyIngredient);
  };

  const handleEditIngredientClick =
    (ingredientIndex: number): MouseEventHandler<HTMLButtonElement> =>
    (e) => {
      e.preventDefault();
      setEditingIngredientIndex(ingredientIndex);
    };

  const handleDoneEditingIngredientClick: MouseEventHandler<
    HTMLButtonElement
  > = (e) => {
    e.preventDefault();
    setEditingIngredientIndex(null);
  };

  const handleTrashIngredientClick =
    (ingredientIndex: number): MouseEventHandler<HTMLButtonElement> =>
    (e) => {
      e.preventDefault();
      remove(ingredientIndex);
    };

  const onSubmitValid: Parameters<typeof handleSubmit>[0] = (data) => {
    console.log(data);
  };

  const onSubmitInvalid: Parameters<typeof handleSubmit>[1] = (errors) => {
    console.error(errors);
  };

  return (
    <section>
      <h1 className="mb-8 text-2xl">Add a new cocktail</h1>
      <div className="w-full max-w-xs">
        <form
          className="mb-4 w-full"
          onSubmit={handleSubmit(onSubmitValid, onSubmitInvalid)}
        >
          <FieldSet legend="Cocktail details">
            <FieldWrapper
              inputId="name"
              label="Cocktail name"
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

            <FieldWrapper
              inputId="description"
              label="Cocktail description (optional)"
              invalid={!!errors.description}
              errorMessage={errors.description?.message}
            >
              <textarea
                id="description"
                data-error={!!errors.description}
                {...register("description")}
              />
            </FieldWrapper>
          </FieldSet>

          <FieldSet className="mb-6" legend="Ingredients">
            <ul className="list-disc pl-4">
              {fields.map((field, index) => (
                <li key={field.id} className="mb-2">
                  <div
                    className={cn(
                      "rounded px-2 py-1",
                      index === editingIngredientIndex && "bg-gray-100",
                      errors.ingredients?.[index] && "bg-red-100"
                    )}
                  >
                    <div className="flex items-start justify-between">
                      <span
                        className={cn(
                          index === editingIngredientIndex && "text-gray-500"
                        )}
                      >
                        {index === editingIngredientIndex && "Editing: "}
                        <span className="font-semibold">
                          {watch(`ingredients.${index}.amount`) || "__"}{" "}
                          {watch(`ingredients.${index}.amountUnit`) || "__"}
                        </span>{" "}
                        of{" "}
                        <span className="font-semibold">
                          {watch(`ingredients.${index}.name`) || "__________"}
                        </span>
                      </span>
                      <div className="flex">
                        {index === editingIngredientIndex ? (
                          <button
                            className="ml-1 p-1"
                            onClick={handleDoneEditingIngredientClick}
                          >
                            <Check size={16} />
                          </button>
                        ) : (
                          <button
                            className="ml-1 p-1"
                            onClick={handleEditIngredientClick(index)}
                          >
                            <Pencil size={16} />
                          </button>
                        )}
                        {fields.length > 1 && (
                          <button
                            className="ml-1 p-1"
                            onClick={handleTrashIngredientClick(index)}
                          >
                            <Trash2 size={16} />
                          </button>
                        )}
                      </div>
                    </div>
                    {index === editingIngredientIndex && (
                      <div>
                        <FieldWrapper
                          inputId={`ingredients.${index}.name`}
                          label="Ingredient name"
                          invalid={!!errors.ingredients?.[index]?.name}
                          errorMessage={
                            errors.ingredients?.[index]?.name?.message
                          }
                        >
                          <input
                            id={`ingredients.${index}.name`}
                            type="text"
                            data-error={!!errors.ingredients?.[index]?.name}
                            {...register(`ingredients.${index}.name` as const)}
                          />
                        </FieldWrapper>

                        <div className="flex justify-stretch">
                          <FieldWrapper
                            className="flex-1"
                            inputId={`ingredients.${index}.amount`}
                            label="Ingredient amount"
                            invalid={!!errors.ingredients?.[index]?.amount}
                            errorMessage={
                              errors.ingredients?.[index]?.amount?.message
                            }
                          >
                            <input
                              id={`ingredients.${index}.amount`}
                              type="text"
                              data-error={!!errors.ingredients?.[index]?.amount}
                              {...register(
                                `ingredients.${index}.amount` as const,
                                { valueAsNumber: true }
                              )}
                            />
                          </FieldWrapper>

                          <FieldWrapper
                            className="ml-3 flex-1"
                            inputId={`ingredients.${index}.amountUnit`}
                            label="Unit"
                            invalid={!!errors.ingredients?.[index]?.amountUnit}
                            errorMessage={
                              errors.ingredients?.[index]?.amountUnit?.message
                            }
                          >
                            <select
                              data-error={
                                errors.ingredients?.[index]?.amountUnit
                              }
                              {...register(
                                `ingredients.${index}.amountUnit` as const
                              )}
                            >
                              <option value="">Select...</option>
                              {amountUnitOptions.map((unit) => (
                                <option key={unit} value={unit}>
                                  {unit}
                                </option>
                              ))}
                            </select>
                          </FieldWrapper>
                        </div>
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <button
              className="rounded p-1 underline hover:outline"
              onClick={handleAddIngredientClick}
            >
              Add ingredient
            </button>
          </FieldSet>

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
