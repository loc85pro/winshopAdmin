const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "PRODUCT_UPDATE":
      return [...payload];

    default:
      return state;
  }
};
