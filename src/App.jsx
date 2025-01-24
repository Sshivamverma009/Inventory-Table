import { useState, useEffect } from "react";
import { StockProvider } from "./context/stockContext";
import StockItems from "./components/Stock.jsx";
import AddItem from "./components/AddItem";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems((prev) => [{ id: Date.now(), ...item }, ...prev]);
  };

  const updateItem = (id, item) => {
    setItems((prev) =>
      prev.map((prevItem) => (prevItem.id === id ? item : prevItem))
    );
  };

  const deleteItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items"));
    if (items && items.length > 0) {
      setItems(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <StockProvider value={{ items, addItem, updateItem, deleteItem }}>
      <div className="bg-gray-100 min-h-screen py-10 px-4">
        <div className="w-full max-w-3xl mx-auto bg-white rounded-lg shadow-lg border border-gray-300 p-6">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Inventory Manager
          </h1>
          <div className="mb-6">
            <AddItem />
          </div>
          <div className="space-y-4">
            {items.length > 0 ? (
              items.map((item) => (
                <div key={item.id} className="w-full">
                  <StockItems item={item} />
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600 italic">
                No items in inventory. Add some!
              </p>
            )}
          </div>
        </div>
      </div>
    </StockProvider>
  );
}

export default App;
