import { ReactNode } from "react";

// Components ( ui )
export interface LayoutProps {
  children: ReactNode;
}

export interface CardProps {
  title: string;
  description: string;
  image: string;
}

export interface ProductCardProps extends CardProps {
  addToCart: (product: CardProps) => void;
}

// Hooks ( context )

export interface CartProps {
  title: string;
  description: string;
  image: string;
}

export interface CartProviderProps {
  children: ReactNode;
}

export interface CartContextProps {
  cart: CardProps[];
  addToCart: (product: CardProps) => void;
  clearCart: () => void;
  sendCart: () => void;
}