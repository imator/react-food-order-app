import React, { useReducer } from "react";
import CartContext from "./cart-context.js";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
//for snapshot
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    //cart-contex içindeki items dizisine veri gömüyor
    const updatedItems = state.items.concat(action.item);
    const uptatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: uptatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};
export default CartProvider;
