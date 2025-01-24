import { createContext, useContext } from "react";

export const stockContext = createContext({
  items: [
    {
      id: 1,
      name: "item-name",
      category: "category",
      quantity: 20,
    },
  ],
  addItem: (item) => {},
  updateItem: (id, item) => {},
  deleteItem: (id) => {},
});

export const useItem = () => {
  return useContext(stockContext);
};

export const StockProvider = stockContext.Provider;
