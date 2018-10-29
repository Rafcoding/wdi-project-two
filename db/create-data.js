const mongoose = require('mongoose');
const Sneaker = require('../models/sneaker');

mongoose.connect('mongodb://localhost/all-sneakers');

const sneakerData = [
  {
    model: 'nike',
    price: 3
  },
  {
    model: 'adidas',
    price: 6
  }
];

// Delete any existing sneakers
Sneaker.collection.drop();

Sneaker.create(sneakerData)
  .then(sneakers => {
    console.log(`Created ${sneakers.length} sneakers`);
    mongoose.connection.close();
  });
