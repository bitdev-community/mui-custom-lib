import {
  Button as BaseButton,
  type ButtonProps as BaseButtonProps,
} from '@mui/material';

export type ButtonProps = {} & BaseButtonProps;

export function Button({ children, ...rest }: ButtonProps) {
  return <BaseButton {...rest}>{children}</BaseButton>;
}
