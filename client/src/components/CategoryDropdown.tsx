import React, { useState } from 'react';
import { Products } from '../models/Products';

interface CategoryDropdownProps {
    category: string;
    subcategories: string[];
    products: Products[];
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

const CategoryDropdown: React.FC<CategoryDropdownProps> = ({
    category,
    subcategories,
    products,
    onMouseEnter,
    onMouseLeave,
}) => {
    const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);

    const filteredProducts = selectedSubcategory
        ? products.filter(
              (product) => product.category === category && product.subcategory === selectedSubcategory
          )
        : products.filter((product) => product.category === category);

    return (
        <div
            className="absolute left-0 w-full bg-white shadow-lg p-4 z-50 flex"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div className="w-1/4">
                <ul>
                    {subcategories.map((subcategory, index) => (
                        <li
                            key={index}
                            className="p-2 hover:bg-gray-200 cursor-pointer"
                            onClick={() => setSelectedSubcategory(subcategory)}
                        >
                            {subcategory}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="w-3/4">
                <ul>
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product, index) => (
                            <li key={index} className="p-2 border-b">
                                {product.name}
                            </li>
                        ))
                    ) : (
                        <li className="p-2">No products available</li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default CategoryDropdown;