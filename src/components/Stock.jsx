import React, { useState } from "react";
import { useItem } from "../context/stockContext.js";

function StockItems({ item }) {
  const [isItemEditable, setIsItemEditable] = useState(false);
  const [isLow, setIsLow] = useState(false);
  const [itemQuant, setItemQuant] = useState(item.quantity);
  const { updateItem, deleteItem } = useItem();

  // Edit item quantity
  const editItem = () => {
    updateItem(item.id, { ...item, quantity: itemQuant });
    if (itemQuant < 10) {
      setIsLow(true);
    }
    else{
      setIsLow(false);
    }
    setIsItemEditable(false);
  };

  return (
    <div className="flex flex-wrap items-center justify-between border border-gray-200 rounded-lg p-5 shadow-md bg-white">
      <div className="flex flex-wrap">
        <div className="flex-1 mr-10">
          <h3 className="text-lg font-medium text-gray-800 truncate">
            {item.name}
          </h3>
        </div>

        {isLow && (
          <div className="flex-1">
            <h3 className="text-lg font-medium text-red-500 truncate">LOW</h3>
          </div>
        )}
      </div>

      <div> 
        <input
          type="number"
          className={`w-16 text-center text-sm border border-gray-300 rounded-lg  py-2 px-3 ${
            isItemEditable ? "bg-white  border-violet-500 " : "bg-gray-100"
          } focus:outline-none focus:ring focus:ring-blue-200 transition`}
          value={itemQuant}
          onChange={(e) => setItemQuant(e.target.value)}
          readOnly={!isItemEditable}
        />

        <button
          className={`ml-2 inline-flex items-center mr-2 justify-center w-12 h-10 rounded-lg text-sm font-medium border transition ${
            isItemEditable
              ? "bg-blue-500 text-white hover:bg-blue-600"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => {
            if (isItemEditable) {
              editItem();
            } else {
              setIsItemEditable(true);
            }
          }}
        >
          {isItemEditable ? "Ok" : "Edit"}
        </button>

        {/* Delete Button */}
        <button
          className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={() => deleteItem(item.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default StockItems;
