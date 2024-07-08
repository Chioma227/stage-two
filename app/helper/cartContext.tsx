"use client"
import  { createContext, useState } from 'react';

interface Product {
  id: number;
  image: string;
  name: string;
  rating: string;
  badgeValue: string;
  prevPrice: string;
  category: string;
  slashPrice: string;
  description: string;
}


interface CartContextProps {
  cartItems: Product[];
  addItemToCart: (product: Product) => void;
  removeItemFromCart: (productId: number) => void;
}

const CartContext = createContext<CartContextProps>({
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
});

export const CartProvider = ({ children }:{ children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addItemToCart = (product: Product) => {
    setCartItems([...cartItems, product]);
  };

  const removeItemFromCart = (productId: number) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
