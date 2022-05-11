import ErrorPage from "pages/error-page/ErrorPage";
import React, { Component, ErrorInfo, ReactNode } from "react";
import { Navigate } from 'react-router-dom';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  debugger;
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.setState({
      hasError: true,
    });
  }

  public render() {
    if (this.state.hasError) {
      this.setState({hasError: false})
      return <Navigate to="/error" />
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
