import React, { useState } from "react";
import styled from "styled-components";
import { DeleteOutlined } from '@ant-design/icons'

import { connect } from "react-redux";
import {
  adjustItemQty,
  removeFromCart,
} from "../../../redux/Shopping/shopping-actions";

const CartItem = ({ item, adjustQty, removeFromCart }) => {
  const [input, setInput] = useState(item.qty);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(item.id, e.target.value);
  };

  return (
    <CartItemContainer>
      <img
        src={item.image}
        alt={item.title}
      />
      <CartItemDetails>
        <p>{item.brand}</p>
        <p>{item.title}</p>
        <p>Original Products
Pay on delivery might be available
These are quality clothes and are free of returns</p>
        
        <p>{item.description}</p>
        <p>VND {item.sellingPrice}</p>
      </CartItemDetails>
      <CartItemActions>
        <div>
          <label htmlFor="qty">Qty</label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
        </div>
          <button onClick={() => removeFromCart(item.id)}>
          <DeleteOutlined  style={{fontSize:'150%'}}  />
          </button>
      </CartItemActions>
    </CartItemContainer>
  );
};

// CSS STYLES
const CartItemContainer = styled.div`
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 3px;
  height: 150px;

  img {
  object-fit: contain;
  border-radius: 10px;
  }
`

const CartItemDetails = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--secondary-color);

 p:nth-child(1){
  font-size: 1rem;
  font-weight: bold;
  }
  p:nth-child(2){
    font-weight: bold;
    color: #535665;
    padding: 5px 20px 14px 0;
    font-size: 20px;
    opacity: .8;
    font-weight: 400;
  }
  p:nth-child(3){
  font-size: 0.8rem;
  opacity: .6;
  }
`

const CartItemActions = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0.6rem;

  div {
  display: flex;
  align-items: center;

  & > input {
  padding: 10px;
  margin-left: 0.4rem;
  width: 60px;
  border-radius: 10px;
  border: 1px solid var(--secondary-color);
  outline: none;
  }
  }

  button {
  width: 40px;
  height: 40px;
  border: 1px solid var(--secondary-color);
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  }
`
// CSS STYLES END

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
