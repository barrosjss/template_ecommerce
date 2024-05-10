"use client";

import { useState, createContext } from "react";
import { CartProviderProps, CartContextProps, CardProps } from "../interfaces";

const saveCartToLocalStorage = (cart: CardProps[]) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const loadCartFromLocalStorage = (): CardProps[] => {
  const cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(cart);
  }
  return [];
};

export const CartContext = createContext<CartContextProps>({
  cart: [],
  addToCart: () => {},
  clearCart: () => {},
  sendCart: () => {},
});

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<CardProps[]>(loadCartFromLocalStorage());

  const addToCart = (product: CardProps) => {
    const newCart = [...cart, product];
    setCart(newCart);
    saveCartToLocalStorage(newCart);
  };

  const clearCart = () => {
    setCart([]);
    saveCartToLocalStorage([]);
  };

  const sendCart = () => {
    const productList = cart.map((product) => `${product.title} - ${product.description}`).join("\n\n\n");
    const whatsappNumber  = "573003225573"
    const url = `https://wa.me/${whatsappNumber}?text=Hola, estos son los productos que me gustaria comprar: \n\n\n ${productList}`;
    window.open(url, '_blank');
    clearCart()
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart, sendCart}}>
      {children}
    </CartContext.Provider>
  );
};
