import { useState } from "react";
import PriceContext from "./price-context";

const PriceProvider = ({ children }) => {
  const [checkboxPrice, setCheckboxPrice] = useState(null);
  const [checked, setChecked] = useState(false);

  const checkboxPriceHandler = (price) => {
    setCheckboxPrice(price);
  };

  const handleChecked = (checked) => {
    setChecked(checked);
  };

  const priceContext = {
    price: checkboxPrice,
    getCheckboxPriceCtx: checkboxPriceHandler,
    checked: checked,
    getCheckboxCheckedCtx: handleChecked,
  };

  return (
    <PriceContext.Provider value={priceContext}>
      {children}
    </PriceContext.Provider>
  );
};

export default PriceProvider;
