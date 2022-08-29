import React from "react";

const PriceContext = React.createContext({
    price: null,
    getCheckboxPrice: (price) => {}
});

export default PriceContext;