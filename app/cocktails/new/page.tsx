"use client";

import { AmountUnit } from "@prisma/client";
import clsx from "clsx";
import { Check, Pencil, Trash2 } from "lucide-react";
import { MouseEventHandler, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().required("Required"),
    ingredients: yup
      .array()
      .min(1)
      .of(
        yup.object({
          name: yup.string().required("Required"),
          amount: yup.number().required("Required").moreThan(0, "Must be > 0"),
          amountUnit: yup.string().required("Required"),
        }),
      )
      .required(),
  })
  .required();

const amountUnitOptions = [AmountUnit.Oz];

const emptyIngredient = { name: "", amount: 0, amountUnit: "" };

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
      ingredients: [emptyIngredient],
    },
    resolver: yupResolver(schema),
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "ingredients",
  });

  const handleAddIngredientClick: MouseEventHandler<HTMLButtonElement> = (
    e,
  ) => {
    e.preventDefault();
    setEditingIngredientIndex(fields.length);
    append(emptyIngredient);
  };

  const [editingIngredientIndex, setEditingIngredientIndex] = useState<
    number | null
  >(0);
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
          <div className="mb-2">
            <label className="mb-1 block text-sm" htmlFor="name">
              Cocktail name
            </label>
            <input
              className={clsx(
                "focus:shadow-outline mb-1 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none",
                errors.name && "border-red-500",
              )}
              {...register("name", { required: true })}
            />
            {errors.name && (
              <p className="mb-1 text-sm text-red-500">{errors.name.message}</p>
            )}
          </div>
          <div className="mb-6">
            <h4>Ingredients</h4>
            <ul className="list-disc pl-4">
              {fields.map((field, index) => (
                <li key={index} className="mb-2">
                  <div
                    className={clsx(
                      "rounded px-2 py-1",
                      index === editingIngredientIndex && "bg-gray-100",
                      errors.ingredients?.[index] && "bg-red-100",
                    )}
                  >
                    <div className="flex items-start justify-between">
                      <span
                        className={clsx(
                          index === editingIngredientIndex && "text-gray-500",
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
                        <div className="mb-2">
                          <label
                            className="mb-2 block text-sm"
                            htmlFor={`ingredients.${index}.name`}
                          >
                            Ingredient name
                          </label>
                          <input
                            className={clsx(
                              "focus:shadow-outline mb-1 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none",
                              errors.ingredients?.[index]?.name &&
                                "border-red-500",
                            )}
                            type="text"
                            placeholder="Ingredient"
                            {...register(`ingredients.${index}.name` as const)}
                          />
                          {errors.ingredients?.[index]?.name && (
                            <p className="mb-1 text-sm text-red-500">
                              {errors.ingredients?.[index]?.name.message}
                            </p>
                          )}
                        </div>

                        <label
                          className="mb-2 block text-sm"
                          htmlFor={`ingredients.${index}.amount`}
                        >
                          Ingredient amount
                        </label>
                        <div className="flex justify-stretch">
                          <div className="mb-2 flex-1">
                            <input
                              className={clsx(
                                "focus:shadow-outline mb-1 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none",
                                errors.ingredients?.[index]?.amount &&
                                  "border-red-500",
                              )}
                              type="text"
                              placeholder="Quantity"
                              {...register(
                                `ingredients.${index}.amount` as const,
                              )}
                            />
                            {errors.ingredients?.[index]?.amount && (
                              <p className="mb-1 text-sm text-red-500">
                                {errors.ingredients?.[index]?.amount.message}
                              </p>
                            )}
                          </div>

                          <div className="mb-2 ml-3 flex-1">
                            <select
                              className={clsx(
                                "focus:shadow-outline mb-1 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none",
                                errors.ingredients?.[index]?.amountUnit &&
                                  "border-red-500",
                              )}
                              {...register(
                                `ingredients.${index}.amountUnit` as const,
                              )}
                            >
                              <option value="">Unit</option>
                              {amountUnitOptions.map((unit) => (
                                <option key={unit} value={unit}>
                                  {unit}
                                </option>
                              ))}
                            </select>
                            {errors.ingredients?.[index]?.amountUnit && (
                              <p className="mb-1 text-sm text-red-500">
                                {
                                  errors.ingredients?.[index]?.amountUnit
                                    .message
                                }
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <button
              className="pointer rounded p-1 underline hover:outline"
              onClick={handleAddIngredientClick}
            >
              Add ingredient
            </button>
          </div>

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
