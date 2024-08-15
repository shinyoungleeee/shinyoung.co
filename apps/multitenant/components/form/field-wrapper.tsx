import { cn } from "../../lib/utils";
import { FC, HTMLProps, ReactNode } from "react";

type FieldWrapperProps = HTMLProps<HTMLDivElement> & {
  inputId?: string;
  label?: ReactNode;
  invalid?: boolean;
  errorMessage?: ReactNode;
  children: ReactNode;
};

export const FieldWrapper: FC<FieldWrapperProps> = ({
  inputId,
  label,
  children,
  invalid,
  errorMessage,
  className,
  ...rest
}) => (
  <div className={cn("mb-2", className)} {...rest}>
    {label && (
      <label className="mb-1 block text-sm" htmlFor={inputId}>
        {label}
      </label>
    )}

    {children}

    {invalid && <p className="mb-1 text-sm text-red-500">{errorMessage}</p>}
  </div>
);
