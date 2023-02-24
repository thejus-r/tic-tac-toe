import { forwardRef } from "react";

type Props = {
  content: string;
};
type Ref = HTMLButtonElement;

const Button = forwardRef<Ref, Props>(function Button(props, ref) {
  return <button ref={ref}>{props.content}</button>;
});

export default Button;
