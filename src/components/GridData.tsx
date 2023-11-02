import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface DropdownItem {
    id: number;
    name: string;
}

interface User {
    ID: number;
    // ... (other fields)
    Id_currency: number;
    Id_country: number;
}

const SearchDropdown: React.FC<{ items: DropdownItem[] }> = ({ items }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedItems, setSelectedItems] = useState<DropdownItem[]>(items);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleCheckboxChange = (id: number) => {
        setSelectedItems((prevItems) => {
            const updatedItems = prevItems.map((item) =>
                item.id === id ? { ...item, selected: !item.selected } : item
            );
            return updatedItems;
        });
    };

    return (
        <div className={`relative ${isOpen ? 'block' : 'hidden'}`}>
            <div className="p-3">
                <label className="sr-only">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                            className="w-4 h-4 text-gray-500"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                        </svg>
                    </div>
                    <input
                        type="text"
                        className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search user"
                    />
                </div>
            </div>
            <ul className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200">
                {selectedItems.map((item) => (
                    <li key={item.id}>
                        <div className="flex items-center pl-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input
                                id={`checkbox-item-${item.id}`}
                                type="checkbox"
                                value=""
                                checked={item.selected}
                                onChange={() => handleCheckboxChange(item.id)}
                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                            />
                            <label
                                htmlFor={`checkbox-item-${item.id}`}
                                className="w-full py-2 ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                            >
                                {item.name}
                            </label>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

