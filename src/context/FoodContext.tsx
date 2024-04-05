import React, { useContext, createContext, useState, useEffect } from "react";

interface FoodData {
  id: number;
  category: string;
  foodName: string;
  imagePath: string;
  ingredients: string[];
  price: number;
  sale: number;
  stock: number;
}

// FoodContext iin type iin zaaj ugnu
interface FoodContextType {
  foodData: FoodData[];
  setFoodData: React.Dispatch<React.SetStateAction<FoodData[]>>;
}
const FoodContext = createContext<FoodContextType>({} as FoodContextType);

// Custom hook uusgej bn useContext ashiglaj
export const useFoodData = () => useContext(FoodContext);

export const FoodContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [foodData, setFoodData] = useState<FoodData[]>([]);

  useEffect(() => {
    fetch("./DummyFood.json")
      .then((res) => res.json())
      .then((data: FoodData[]) => {
        setFoodData(data);
      })
      .catch((error) => {
        console.error("Error fetching:", error);
      });
  }, []);
  // console.log("foodData:", foodData);

  return (
    <FoodContext.Provider value={{ foodData, setFoodData }}>
      {children}
    </FoodContext.Provider>
  );
};
