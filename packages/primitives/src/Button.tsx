import * as React from "react";

export interface IButtonProps {
  children: JSX.Element;

  foobar?: string;
}

class Button extends React.Component<IButtonProps> {
  render() {
    return <button>{this.props.children}</button>;
  }
}

export default Button;
