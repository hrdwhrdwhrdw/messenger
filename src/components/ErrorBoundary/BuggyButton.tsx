import React, { Component } from "react";
import CustomButton from "../Button/Button";

interface BuggyType {
  releaseBugs: boolean;
}

export default class BuggyButton extends Component<{}, BuggyType> {
  constructor(props: BuggyType) {
    super(props);
    this.state = { releaseBugs: false };
  }
  handleClick = () => {
    this.setState({
      releaseBugs: true,
    });
  };
  render() {
    if (this.state.releaseBugs) {
      throw new Error("app was crashed:(");
    }
    return (
      <div>
        <CustomButton onClick={this.handleClick}>Buggy</CustomButton>
      </div>
    );
  }
}
