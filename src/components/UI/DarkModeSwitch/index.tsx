import * as React from "react";

import { Label, Input, Elements, SVG, Planet } from "./styled";

interface DarkModeSwitchProps {
  checked: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function DarkModeSwitch({ checked, onChange }: DarkModeSwitchProps) {
  return (
    <Label htmlFor="dark-mode-switch">
      <Input
        id="dark-mode-switch"
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <Planet />
      <Elements>
        <SVG
          version="1.1"
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="250" cy="250" r="200" />
        </SVG>
        <SVG
          version="1.1"
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="250" cy="250" r="200" />
        </SVG>
        <SVG
          version="1.1"
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="250" cy="250" r="200" />
        </SVG>
        <SVG
          version="1.1"
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="250" cy="250" r="200" />
        </SVG>
        <SVG
          version="1.1"
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="250" cy="250" r="200" />
        </SVG>
        <SVG
          version="1.1"
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="250" cy="250" r="200" />
        </SVG>
        <SVG
          version="1.1"
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="250" cy="250" r="200" />
        </SVG>
        <SVG
          version="1.1"
          viewBox="0 0 500 500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="250" cy="250" r="200" />
        </SVG>
      </Elements>
    </Label>
  );
}

export default DarkModeSwitch;
