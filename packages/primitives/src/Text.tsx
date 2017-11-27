import * as React from "react";

export interface ITextProps {
  children: string;
}
class Text extends React.Component<ITextProps> {
  render() {
    return <div>{this.props.children}</div>;
  }
}

export default Text;
