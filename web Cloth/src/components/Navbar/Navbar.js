import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import HeartOutlined from "@ant-design/icons/HeartOutlined";
import ShoppingCartOutlined from "@ant-design/icons/ShoppingCartOutlined";
import SearchOutlined from "@ant-design/icons/SearchOutlined";

import { connect } from "react-redux";


const Navbar = ({ cart, wishList }) => {
  const [cartCount, setCartCount] = useState(0);
  const [wishlistt, setWishlistt] = useState(0);

  useEffect(() => {
    let a = 0;
    wishList.forEach((item) => {
      a += item;
    });

    setWishlistt(a);
  }, [wishlistt, wishList]);
  console.log(wishList);


  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <>
    <Container>
      <Nav>
        <Nav1>
          <span><StyledLink to="/">HAI Store</StyledLink></span>
        </Nav1>

        <Nav2>
          <div>
            <SearchOutlined />
          </div>

          <input placeholder="Search for products,brands and more" /> 
        </Nav2>

        <Nav3>
          <div>
            <StyledLink to="/wishlist">
            <HeartOutlined
             />
             {wishList.length}
            </StyledLink>
          </div>
          <div>
          <StyledLink to="/cart">
           <ShoppingCartOutlined /><span>{cartCount}</span>
          </StyledLink>
          </div>
        </Nav3>
      </Nav>
    </Container>
  </>
  );
};

// CSS STYLES 
const Container = styled.div`
  top: 0;
  position: fixed;
  right: 0;
  left: 0;
  z-index: 10;
  background: blue;
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`

const Nav1 = styled.div`
  display: flex;

  & > span {
    padding: 25px 1px 17px 28px;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    letter-spacing: 0.3px;
    color: red;
    border-bottom: none;
    text-transform: uppercase;
    font-weight: bold;
    font-family: "Roboto", sans-serif;
    text-decoration: none;
  }
`

const Nav2 = styled.div`
  display: flex;
  align-items: center;
  background-color: #eff2f5;
  padding: 1px;
  margin-left: 10px;
  margin-top: 10px;
  border-radius: 10px;
  width: 350px;
  height: 40px;

  &:hover {
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  }

  & > div {
    padding-left: 10px;
    color: lightgray;
  }

  & > input {
    border: none;
    background-color: transparent;
    outline-width: 0;
    margin-left: 20px;
    width: 300px;
  }
`

const Nav3 = styled.div`
  display: flex;
  align-items: center;
  margin-right: 50px;
  font-size: 20px;
  cursor: pointer;

  & > div {
      display: flex;
      flex-direction: column;
      margin-left: 20px;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
  // CSS STYLES END

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
    wishList: state.shop.wishList,
  };
};

export default connect(mapStateToProps)(Navbar);
