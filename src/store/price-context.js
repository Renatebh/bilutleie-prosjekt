import React from "react";

const PriceContext = React.createContext({
    price: null,
    getCheckboxPrice: (price) => {},
    checked: false,
    getCheckboxChecked: (checked) => {}
});

export default PriceContext;