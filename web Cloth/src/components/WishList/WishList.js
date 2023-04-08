import React from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
import WishListItem from './WishListItem/WishListItem'

const WishList = ({wishList}) => {
    return (
        <Wish>
          {wishList.map((item) => (
          <WishListItem key={item.id} item={item} />
        ))}
        </Wish>
    )
}

const Wish = styled.div`
margin-top:100px;
margin-left:100px;
`

const mapStateToProps = (state) => {
    return {
      wishList: state.shop.wishList,
    };
  };

export default connect(mapStateToProps)(WishList)
