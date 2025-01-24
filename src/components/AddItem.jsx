import React, { useState } from 'react';
import { useItem } from '../context/stockContext.js';

function AddItem() {
    const [item, setItem] = useState({});
    const { addItem } = useItem();

    const add = (e) => {
        e.preventDefault();

        if (!item.name || !item.category || !item.quantity) return;

        addItem(item);
        setItem({});
    };

    return (
        <form
            onSubmit={add}
            className="flex flex-wrap gap-3 p-4 bg-white shadow-md rounded-lg"
        >
            <input
                type="text"
                placeholder="Item Name"
                className="flex-1 min-w-[200px] border border-gray-300 rounded-lg px-5 py-3 text-sm focus:outline-none focus:ring focus:ring-blue-200 transition"
                value={item.name || ''}
                onChange={(e) => setItem({ ...item, name: e.target.value })}
            />
            <input
                type="text"
                placeholder="Category"
                className="flex-1 min-w-[200px] border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-200 transition"
                value={item.category || ''}
                onChange={(e) => setItem({ ...item, category: e.target.value })}
            />
            <input
                type="number"
                placeholder="Quantity"
                className="flex-1 min-w-[100px] border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-200 transition"
                value={item.quantity || ''}
                onChange={(e) => setItem({ ...item, quantity: e.target.value })}
            />
            <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-300 transition"
            >
                Add Item
            </button>
        </form>
    );
}

export default AddItem;
