import { cn } from "../../lib/utils";
import { FC, HTMLProps, ReactNode } from "react";

export type FieldSetProps = HTMLProps<HTMLFieldSetElement> & {
  legend: ReactNode;
  children: ReactNode;
  invalid?: boolean;
  errorMessage?: ReactNode;
};

export const FieldSet: FC<FieldSetProps> = ({
  legend,
  children,
  invalid,
  errorMessage,
  className,
  ...rest
}) => (
  <fieldset className={cn("mb-2", className)} {...rest}>
    <legend className="mb-1">{legend}</legend>

    {children}

    {invalid && <p className="mb-1 text-sm text-red-500">{errorMessage}</p>}
  </fieldset>
);
