import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export type PropsType = {
  params: {
    userId?: number
  }
  // history: Array<string>
}

export const withRouter = (WrappedComponent: React.ComponentType) => {
  const Wrapper:React.FC<PropsType> = (props) => {
    const params = useParams();
    return (
      <WrappedComponent
        params={params}
        {...props}
        />
    );
  };
  return Wrapper;
};
