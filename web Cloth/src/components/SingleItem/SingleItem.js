import React from "react";
import styled from "styled-components";

import { connect } from "react-redux";
import { addToCart } from "../../redux/Shopping/shopping-actions";
import ShoppingCartOutlined from "@ant-design/icons/ShoppingCartOutlined";

const SingleItem = ({ current, addToCart }) => {
  return (
    <ViewItem>
      <img
        src={current.image}
        alt={current.title}
      />
      <ViewItemDetails>
        <p>{current.brand}</p>
        <p>{current.title}</p>
        <p>For {current.idealFor}</p>
        <p>Size:{current.size}</p>
        <p>VND {current.sellingPrice}
        <button onClick={() => addToCart(current.id)}>
         <ShoppingCartOutlined />
        </button>
        </p>
      </ViewItemDetails>
    </ViewItem>
  );
};

// CSS STYLES
const ViewItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 150px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin-left: 300px;
  margin-right: 300px;
`
const ViewItemDetails = styled.div`
  p:nth-child(1) {
    color: red;
    padding: 0 20px 0 0;
    font-size: 24px;
    font-weight: 500;
    line-height: 1;
  }

  p:nth-child(2) {
    color: #535665;
    padding: 5px 20px 14px 0;
    font-size: 20px;
    opacity: 0.8;
    font-weight: 400;
  }

  p:nth-child(3) {
    color: #282c3f;
    font-weight: 500;
  }

  p {
    font-size: 1.2rem;
    font-weight: bold;
  }

  button {
    width: 45px;
    height: 45px;
    border: 1px solid var(--secondary-color);
    border-radius: 50%;
    font-size: 25px;
    cursor: pointer;
    outline: none;
    margin-left: 50px;
  }

  button:hover {
    color: #535766;
  }
`;

// CSS STYLES END



const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
