import { combineReducers } from "redux";
import productsReducer from "./ProductReducer";
import productCategoryReducer from "./ProductCategoryReducer";
import OrdersReducer from "./OrdersReducer";
import UsersReducer from "./UserReducer";
import ProductsReducer from "./ProductsReducer";
const rootReducer = combineReducers({
  getProducts: productsReducer,
  getProductsByCategory: productCategoryReducer,
  order: OrdersReducer,
  user: UsersReducer,
  product: ProductsReducer,
});

export default rootReducer;
