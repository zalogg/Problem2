const express = require('express');
const router = express.Router();

let products = [];

// Get all products
router.get('/', (req, res) => {
  res.json(products);
});

// Add a new product
router.post('/', (req, res) => {
  const product = req.body;
  products.push(product);
  res.status(201).json(product);
});

// Update a product by id
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const updatedProduct = req.body;
  let found = false;

  products = products.map(product => {
    if (product.id === id) {
      found = true;
      return updatedProduct;
    }
    return product;
  });

  if (found) {
    res.status(200).json(updatedProduct);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

// Delete a product by id
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const initialLength = products.length;
  products = products.filter(product => product.id !== id);

  if (products.length < initialLength) {
    res.status(200).json({ message: 'Product deleted' });
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

module.exports = router;
