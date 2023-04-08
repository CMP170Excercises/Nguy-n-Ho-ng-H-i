import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products:[
    {
      "id": 1,
      "brand": "Hooded Sweater Jacket",
      "title": "Men Jackets",
      "image": "https://product.hstatic.net/1000096703/product/hma00051_d3b68cb809da407a82349546a742e372_master.jpg",
      "isAssured": false,
      "mrp": 285000,
      "offer": 5,
      "sellingPrice": 265000,
      "size": "XL",
      "idealFor": "Men" 
    },
    {
      "id": 2,
      "brand": "Men's Short Sleeve Shirt Black Silk Fabric",
      "title": "Men Black Kaki ",
      "image": "https://product.hstatic.net/1000096703/product/1_35fea3921d40476397e3def4b9fb79e6_master.jpg",
      "isAssured": true,
      "mrp": 525000,
      "offer": 5,
      "sellingPrice": 515000,
      "size": "L",
      "idealFor": "Men" 
    },
    {
      "id": 3,
      "brand": "Unisex Saigonnese T-shirt",
      "title": "T-shirt",
      "image": "https://product.hstatic.net/1000096703/product/1_57509edb0f514024804aa8b52b039e8c_master.jpg",
      "isAssured": true,
      "mrp": 295000,
      "offer": 5,
      "sellingPrice": 285000,
      "size": "M",
      "idealFor": "Men" 
    },
    {
      "id": 4,
      "brand": "Men's Short Sleeve Blue Silk Shirt",
      "title": "Men Black Kaki",
      "image": "https://product.hstatic.net/1000096703/product/1_c9f474ddcc5c449fb30f92956bdbadb6_master.jpg",
      "isAssured": true,
      "mrp": 250000,
      "offer": 5,
      "sellingPrice": 240000,
      "size": "XL",
      "idealFor": "Men" 
    },
    {
      "id": 5,
      "brand": "Women's sun protection pink jacket",
      "title": "Wonmen jacket",
      "image": "https://canifa.com/img/1000/1500/resize/6/o/6ot23s001-sp141-m-1.jpg",
      "isAssured": true,
      "mrp": 450000,
      "offer": 5,
      "sellingPrice": 444000,
      "size": "XL",
      "idealFor": "WoMen" 
    },
    {
      "id": 6,
      "brand": "Women's sun protection yellow jacket",
      "title": "Wonmen jacket",
      "image": "https://canifa.com/img/1000/1500/resize/6/o/6ot23s001-sy249-m-1.jpg",
      "isAssured": true,
      "mrp": 430000,
      "offer": 5,
      "sellingPrice": 419000,
      "size": "M",
      "idealFor": "WoMen" 
    },
    {
      "id": 7,
      "brand": "Women's pants",
      "title": "pants long",
      "image": "https://canifa.com/img/1000/1500/resize/6/b/6bp23s001-pa139-m-1.webp",
      "isAssured": true,
      "mrp": 500000,
      "offer": 5,
      "sellingPrice": 480000,
      "size": "XL",
      "idealFor": "WoMen" 
    },
    {
      "id": 8,
      "brand": "Women's jeans",
      "title": "Jeans",
      "image": "https://canifa.com/img/1000/1500/resize/6/b/6bj23s002-sj799-27-1.webp",
      "isAssured": true,
      "mrp": 600000,
      "offer": 5,
      "sellingPrice": 580000,
      "size": "L",
      "idealFor": "WoMen" 
    },
    
    
  ],
  cart: [],
  wishList:[],
  listOfSelectedFilters:[],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Get Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };

    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };

    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };

    case actionTypes.SORT_ITEM:
      const sortedProducts = action.payload.sortOrder === 'low'
                              ? state.products.sort((a, b) => a.sellingPrice - b.sellingPrice)
                              : state.products.sort((a, b) => b.sellingPrice - a.sellingPrice)
      return {
        ...state,
        products: [...sortedProducts],
      };

    case actionTypes.FILTER_ITEM:

      let newFilters = [...state.listOfSelectedFilters];

      if(action.payload.checked){
        newFilters.push(action.payload.filterProd)
      } else {
        newFilters = state.listOfSelectedFilters.filter((item) => item !== action.payload.filterProd);
      }

      const filteredProducts = INITIAL_STATE.products.filter((item) => {
        return newFilters.indexOf(item.idealFor) >= 0 ||  newFilters.indexOf(item.brand) >= 0 || newFilters.indexOf(item.size) >= 0
      })

      return {
        ...state,
        products: newFilters.length > 0 ? filteredProducts : INITIAL_STATE.products,
        listOfSelectedFilters: newFilters,
      };


      case actionTypes.WISH_LIST:
      const wishList = state.products.find(
        (item) => item.id === action.payload.id
      )

      const inWishList = state.wishList.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        wishList: inWishList
          ? state.wishList.map((item) =>
              item.id === action.payload.id 
                ? { ...item, qty: item.qty + 0 }
                : item
            ).filter((item) => item.id !== action.payload.id)
         : [wishList, ...state.wishList],
      };

    case actionTypes.REMOVE_WISH_LIST:
      return {
        ...state,
        wishList: state.wishList.filter((item) => item.id !== action.payload.id),
      };
  

    default:
      return state;
  }
};

export default shopReducer;
