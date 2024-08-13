import { Option } from "@/lib/form-data";
import { FC, ReactNode } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { FieldSet, FieldSetProps } from "./fieldset";

type RadioGroupProps = Omit<FieldSetProps, "children"> & {
  id: string;
  legend?: ReactNode;
  invalid?: boolean;
  errorMessage?: ReactNode;
  registerReturn: UseFormRegisterReturn;
  options: Option[];
};

export const RadioGroup: FC<RadioGroupProps> = ({
  id,
  invalid,
  registerReturn,
  options,
  ...rest
}) => (
  <FieldSet id={id} invalid={invalid} {...rest}>
    <div className="flex flex-col items-start">
      {options.map(({ label, value }) => (
        <div key={value} className="mb-2 flex items-center">
          <input
            id={id + "-" + value}
            type="radio"
            value={value}
            data-error={invalid}
            {...registerReturn}
          />
          <label htmlFor={id + "-" + value} className="ml-3 text-sm">
            {label}
          </label>
        </div>
      ))}
    </div>
  </FieldSet>
);
