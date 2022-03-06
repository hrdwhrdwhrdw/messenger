import React from "react";

export let StoreContext = React.createContext(null);

let Provider = (props) => {
  return (
    <StoreContext.Provider value={props.store}>
      {props.children}
    </StoreContext.Provider>
  );
}

export default Provider;