import { createContext, useReducer, useEffect, useContext } from 'react';

const initialState = {
    cartItems: [],
};

const CartContext = createContext();

export function useCartContext(){
    return useContext(CartContext)
}

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.cartItems.find((item) => item._id === action.payload._id);
      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item._id === action.payload._id ? { ...item, amount: item.amount + 1 } : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, amount: 1 }],
        };
      }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item._id !== action.payload),
      };
    case 'CLEAR_CART':
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

const CartContextProvider = (props) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    const data = localStorage.getItem('cartItems');
    if (data) {
      dispatch({ type: 'SET_CART_ITEMS', payload: JSON.parse(data) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
  }, [state.cartItems]);

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const removeFromCart = (productId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const getCartTotal = () => {
    return state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cartItems: state.cartItems, addToCart, removeFromCart, clearCart, getCartTotal }}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
