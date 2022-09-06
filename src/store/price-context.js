import React from "react";

const PriceContext = React.createContext({
    price: null,
    getCheckboxPrice: (price) => {},
    counter: 0,
    CheckedCount: (count) => {}
});

export default PriceContext;