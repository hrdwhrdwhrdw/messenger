import React, { Component } from "react";

export default class ProfileStatus extends Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  componentDidMount() {
    if (!this.props.status) {
      this.setState({
        status: "",
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status,
      });
    }
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.target.value,
    });
  };

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };

  deactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status);
  };

  render() {
    return (
      <div>
        {this.state.editMode ? (
          <input
            type="text"
            value={this.state.status}
            autoFocus={true}
            onChange={this.onStatusChange}
            onBlur={this.deactivateEditMode}
          />
        ) : (
          <span
            onChange={this.onStatusChange}
            onDoubleClick={this.activateEditMode}
          >
            {this.props.status}
          </span>
        )}
      </div>
    );
  }
}
