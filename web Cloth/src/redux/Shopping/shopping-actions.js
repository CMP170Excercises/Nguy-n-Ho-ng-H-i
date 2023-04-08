import * as actionTypes from "./shopping-types";

export const addToCart = (itemID) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemID,
    },
  };
};

export const removeFromCart = (itemID) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      id: itemID,
    },
  };
};

export const adjustItemQty = (itemID, qty) => {
  return {
    type: actionTypes.ADJUST_ITEM_QTY,
    payload: {
      id: itemID,
      qty,
    },
  };
};

export const loadCurrentItem = (item) => {
  return {
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: item,
  };
};

export const sortProducts = (sortOrder) => {
  return {
    type: actionTypes.SORT_ITEM,
    payload: {
      sortOrder
    },
  };
}

export const filterProducts = (filterProd,checked) => {
  console.log(checked)
  return {
    type: actionTypes.FILTER_ITEM,
    payload: {
      filterProd,
      checked,
    },
  };
}


export const wishList = (itemID,qty) => {
  return {
    type: actionTypes.WISH_LIST,
    payload: {
      id: itemID,
      qty,
    },
  };
}

export const removeWishList = (itemID) => {
  return {
    type: actionTypes.REMOVE_WISH_LIST,
    payload: {
      id: itemID,
    },
  };
}