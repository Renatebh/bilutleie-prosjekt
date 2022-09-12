const inputs = [
  {
    id: 1,
    name: "name",
    type: "text",
    placeholder: "Navn",
    errorMessage: "Navn må fylles ut",
    required: true,
  },
  {
    id: 2,
    name: "email",
    type: "email",
    placeholder: "Email",
    errorMessage: "Should be a valid email adresss",
    required: true,
  },
  {
    id: 3,
    name: "phone",
    type: "number",
    placeholder: "Telefon",
    errorMessage: "Telefon nummer må inneholde 8 tall",
    max: "99999999",
    min: "9999999",
    required: true,
  },
];

export default inputs;
