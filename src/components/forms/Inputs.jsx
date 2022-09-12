const inputs = [
  {
    id: 1,
    name: "name",
    type: "text",
    placeholder: "Navn",
    errorMessage: "Navn må fylles ut",
    patter: "[a-åA-Ås]",
    required: true,
  },
  {
    id: 2,
    name: "email",
    type: "email",
    placeholder: "Email",
    errorMessage: "Trenger en gyldig e-postadresse",
    pattern: "[a-z0-9._-]+@[a-z.]+.[a-z]{2,3}",
    required: true,
  },
  {
    id: 3,
    name: "phone",
    type: "number",
    placeholder: "Telefon",
    errorMessage: "Telefonnummer må inneholde åtte tall",
    max: "99999999",
    min: "9999999",
    required: true,
  },
];

export default inputs;
