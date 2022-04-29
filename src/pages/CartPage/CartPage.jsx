import React from "react";
import useProtectedPage from "../../hooks/useProtectedPage";
const CartPage = () => {
  useProtectedPage();
  return <div>CartPage</div>;
};
export default CartPage;
