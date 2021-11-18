import React, { Component } from "react";

interface IFirstComponentProps {
  count: number;
}

class FirstComponent extends Component<IFirstComponentProps> {
  public static defaultProps = {
    count: 0
  };

  render() {
    return (
      <div>
        <div>FirstComponentClass</div>
        <div>{this.props.count}</div>
      </div>
    );
  }
}

export default FirstComponent;
