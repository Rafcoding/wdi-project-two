const mongoose = require('mongoose');

const sneakerSchema = mongoose.Schema({
  
  model: String,
  price: Number,
  image: String
});

const sneakerModel = mongoose.model('Sneaker', sneakerSchema);

module.exports = sneakerModel;
