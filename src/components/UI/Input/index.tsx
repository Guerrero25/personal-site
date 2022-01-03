import React, { InputHTMLAttributes } from "react";
import { InputBase, Label, Wrapper } from "./styled";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  as?: any;
}

export default function Input({ id, label, as, ...props }: InputProps) {
  return (
    <Wrapper>
      <InputBase placeholder={label} id={id} as={as} {...props} />
      <Label htmlFor={id}>{label}</Label>
    </Wrapper>
  );
}
