const mongoose = require('mongoose');
const Sneaker = require('../models/sneaker');

mongoose.connect('mongodb://localhost/all-sneakers');

const sneakerData = [
  {
    id: 1,
    model: 'nike',
    price: 150,
    image: 'https://assets.cdn.goodhoodstore.com/products/40433/medium/NIKE-GYAKUSOU_AW18_BLACK_GOODHOOD_1573-2.jpg'
  },
  {
    id: 2,
    model: 'adidas',
    price: 100,
    image: 'https://assets.cdn.goodhoodstore.com/products/37413/medium/ADIDAS_GOODHOOD_SS18_9.jpg'
  }
];

// Delete any existing sneakers
Sneaker.collection.drop();

Sneaker.create(sneakerData)
  .then(sneakers => {
    console.log(`Created ${sneakers.length} sneakers`);
    mongoose.connection.close();
  });
