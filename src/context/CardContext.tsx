import { FoodType } from "@/utils/types";
import React, { useContext, createContext, useState } from "react";

// interface FoodData {
//   id: number;
//   category: string;
//   foodName: string;
//   imagePath: string;
//   ingredients: string[];
//   price: number;
//   sale: number;
//   stock: number;

// }

type CardFoodType = {
  food: FoodType;
  count: number;
};

// FoodContext iin type iin zaaj ugnu
interface CartContextType {
  cartFoods: CardFoodType[];
  setCartFoods: React.Dispatch<React.SetStateAction<CardFoodType[]>>;
}
const CartContext = createContext<CartContextType>({} as CartContextType);

// Custom hook uusgej bn useContext ashiglaj
export const useCartItems = () => useContext(CartContext);

export const CartContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cartFoods, setCartFoods] = useState<CardFoodType[]>([]);
  return (
    <CartContext.Provider value={{ cartFoods, setCartFoods }}>
      {children}
    </CartContext.Provider>
  );
};
