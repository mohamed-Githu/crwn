import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = {
      hasError: false,
    };
  }

  static getDrivedStateFromError() {
    return { hasError: true };
  }

  render() {
    return this.state.hasError ? (
      <h2>
        Something Went Wrong
      </h2>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
