import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { connect } from "react-redux";

import CartItem from "./CartItem/CartItem";

const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.sellingPrice;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  return (
    <CartContainer>
      <Items>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </Items>
      <CartSummary>
        <h4>Cart Summary</h4>
        <div>
          <span>TOTAL: ({totalItems} items)</span>
          <span>VND {totalPrice}</span>
        </div>
        <button onClick={()=>alert("Checkout is succefull")}>
          Proceed To Checkout
        </button>
        
      </CartSummary>
    </CartContainer>
  );
};

// CSS STYLES
const CartContainer = styled.div`
  margin: 80px auto;
  width: 1100px;
  display: flex;
  justify-content: space-between;
`
const Items = styled.div`
  flex: 0.7;
  margin-right: 1rem;
`

const CartSummary = styled.div`
  flex: 0.3;
  display: flex;
  flex-direction: column;
  height: 200px;
  justify-content: space-between;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 10px;

  h4 {
    font-size: 1.2rem;
  font-weight: bold;
  }

  & > div {
    display: flex;
  align-items: center;
  }

  & > div > span:nth-child(1) {
    font-size: 0.9rem;
  flex: 0.6;
}

& > div > span:nth-child(2) {
  flex: 0.4;
  font-size: 1.2rem;
  font-weight: bold;
}

  & > button{
        padding: 10px 17px;
        font-size: 16px;
        font-weight: 500;
        cursor: pointer;
        border: 1px solid #535766;
        border-color: red;
    }
`

// CSS STYLES END


const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);
