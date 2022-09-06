import { useState } from "react";
import PriceContext from "./price-context";

const PriceProvider = ({ children }) => {
  const [checkboxPrice, setCheckboxPrice] = useState(null);
  const [checkedCount, setCheckedCount] = useState(0);

  const checkboxPriceHandler = (price) => {
    setCheckboxPrice(price);
  };

  const handleCheckedCount = (count) => {
    setCheckedCount(count);
  };

  const priceContext = {
    price: checkboxPrice,
    getCheckboxPriceCtx: checkboxPriceHandler,
    counter: checkedCount,
    getCheckedCountCtx: handleCheckedCount,
  };

  return (
    <PriceContext.Provider value={priceContext}>
      {children}
    </PriceContext.Provider>
  );
};

export default PriceProvider;
