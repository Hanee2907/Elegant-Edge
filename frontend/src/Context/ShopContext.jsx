import React, { createContext } from "react";
import { products } from "../Components/Images/products";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const contextValue = { products };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
