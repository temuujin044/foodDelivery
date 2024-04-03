import React, { useContext, createContext, useState } from "react";

interface FoodData {
  id: number;
  category: string;
  foodName: string;
  imagePath: string;
  ingredients: string[];
  price: number;
  sale: number;
  stock: number;
  count: number;
}

// FoodContext iin type iin zaaj ugnu
interface CartContextType {
  cartFoods: FoodData[];
  setCartFoods: React.Dispatch<React.SetStateAction<FoodData[]>>;
}
const CartContext = createContext<CartContextType>({} as CartContextType);

// Custom hook uusgej bn useContext ashiglaj
export const useCartItems = () => useContext(CartContext);

export const CartContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartFoods, setCartFoods] = useState<FoodData[]>([]);
  return (
    <CartContext.Provider value={{ cartFoods, setCartFoods }}>
      {children}
    </CartContext.Provider>
  );
};
