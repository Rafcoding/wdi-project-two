const mongoose = require('mongoose');

const sneakerSchema = mongoose.Schema({

  model: String,
  price: Number,
  image: String,
  description: String,
  comments: [{
    rating: { type: Number, min: 1, max: 10 },
    user: { type: String, required: true },
    content: { type: String }
  }]
});

const sneakerModel = mongoose.model('Sneaker', sneakerSchema);
module.exports = sneakerModel;
