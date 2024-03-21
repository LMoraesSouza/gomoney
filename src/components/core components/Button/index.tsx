import { ButtonHTMLAttributes, ReactElement } from "react";
import { ButtonContainer, ButtonSize, ButtonVariant, LabelDiv } from "./styles";

interface PropsType extends ButtonHTMLAttributes<HTMLButtonElement> {
  iconRight?: boolean;
  onClick?: () => void;
  icon?: ReactElement;
  label: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function Button({
  variant = "primary",
  iconRight,
  icon,
  label,
  size = "md",
  ...rest
}: PropsType) {
  return (
    <ButtonContainer variant={variant} size={size} {...rest}>
      {!iconRight && icon}
      <LabelDiv size={size}>
        <p>{label}</p>
      </LabelDiv>
      {iconRight && icon}
    </ButtonContainer>
  );
}
