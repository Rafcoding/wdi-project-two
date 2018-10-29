const mongoose = require('mongoose');

const sneakerSchema = mongoose.Schema({
  name: String,
  price: Number
});

const sneakerModel = mongoose.model('Sneaker', sneakerSchema);

module.exports = sneakerModel;
