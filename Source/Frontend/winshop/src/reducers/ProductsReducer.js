const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "PRODUCT_UPDATE":
      return [...payload];
    case "RENDER":
      console.log("render");
      return [...state];
    default:
      return state;
  }
};
