import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('');

    useEffect(() => {
        axios.get('http://localhost:5000/api/products')
            .then(response => setProducts(response.data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSortChange = (event) => {
        setSortOption(event.target.value);
    };

    const filteredProducts = products
        .filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .sort((a, b) => {
            if (sortOption === 'price-asc') {
                return a.price - b.price;
            } else if (sortOption === 'price-desc') {
                return b.price - a.price;
            } else {
                return 0;
            }
        });

    return (
        <div className="App">
            <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Product Listing </h1>
            <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="border rounded p-2 mb-4"
            />
            <select 
            value={sortOption} 
            onChange={handleSortChange}
            className="border rounded p-2 mb-4 ml-2">
                <option value="">Sort By</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
            </select>
            <div className="product-list flex justify-center items-center mt-2.5 mb-5">
                {filteredProducts.map(product => (
                    <div key={product.id} className="product-item px-5 pb-5 items-center justify-between rounded-lg">
                        <img src={product.image} alt={product.name} className="rounded mb-2" />
                        <h2>{product.name}</h2>
                        <p>${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
