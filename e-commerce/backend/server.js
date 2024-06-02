import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());

// Mock database
const products = [
    { id: 1, name: 'Product 1', price: 100, image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Product 2', price: 200, image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Product 3', price: 150, image: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Product 4', price: 50, image: 'https://via.placeholder.com/150' }
];

// Get all products
app.get('/api/products', (req, res) => {
    res.json(products);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
