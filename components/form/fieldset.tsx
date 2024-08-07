import { FC, HTMLProps, ReactNode } from "react";

type FieldSetProps = HTMLProps<HTMLFieldSetElement> & {
  legend: ReactNode;
  children: ReactNode;
};

export const FieldSet: FC<FieldSetProps> = ({ legend, children, ...rest }) => (
  <fieldset {...rest}>
    <legend className="mb-1">{legend}</legend>
    {children}
  </fieldset>
);
