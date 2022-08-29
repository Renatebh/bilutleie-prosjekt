import { useState } from "react";
import PriceContext from "./price-context";

const PriceProvider = ({ children }) => {
  const [checkboxPrice, setCheckboxPrice] = useState(null);

  const checkboxPriceHandler = (price) => {
    setCheckboxPrice(price);
  };

  const priceContext = {
    price: checkboxPrice,
    getCheckboxPriceCtx: checkboxPriceHandler,
  };

  return (
    <PriceContext.Provider value={priceContext}>
      {children}
    </PriceContext.Provider>
  );
};

export default PriceProvider;
