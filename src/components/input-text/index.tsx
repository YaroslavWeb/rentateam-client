import { ChangeEventHandler, HTMLAttributes } from "react";

import { InputWrapper, Input, InputTooltip } from "./styles";

interface InputTextProps extends HTMLAttributes<HTMLInputElement> {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  value?: string;
  error?: string | null;
}

export function InputText(props: InputTextProps) {
  const { error } = props;
  return (
    <InputWrapper>
      <Input {...props} />
      {error && <InputTooltip>{error}</InputTooltip>}
    </InputWrapper>
  );
}
