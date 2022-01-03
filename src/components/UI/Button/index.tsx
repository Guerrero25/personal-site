import React, { ButtonHTMLAttributes } from "react";
import { ButtonBase } from "./styled";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

function Button({ ...props }: ButtonProps) {
  return <ButtonBase {...props} />;
}

export default Button;
