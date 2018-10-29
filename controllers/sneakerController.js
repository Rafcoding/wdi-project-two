const Sneaker = require('../models/sneaker');

function sneakersIndex(req, res) {
  Sneaker.find().then(sneakers => {
    // sneakers is an array :( Need to make an object:
    const sneakerObj = {
      sneakers: sneakers
    };
    res.render('sneakers/index', sneakerObj);
  });
}

function sneakersShow(req, res) {
  // First find the sneaker in the database
  Sneaker.findById(req.params.sneakerId)
    .then(sneaker => {
      res.render('sneakers/show', sneaker);
    });
}

function sneakersNew(req, res) {
  res.render('sneakers/new');
}

function sneakersCreate(req, res) {
  Sneaker.create(req.body)
    .then(sneaker => {
      res.redirect(`/sneakers/${sneaker.id}`);
    });
}

function sneakersEdit(req, res) {
  // Edit form is prepopulated so we need to find the sneaker First
  Sneaker.findById(req.params.sneakerId)
    .then(sneaker => {
      res.render('sneakers/edit', sneaker);
    });
}

function sneakersUpdate(req, res) {
  // Find the sneaker, then update it
  Sneaker.findByIdAndUpdate(req.params.sneakerId, req.body)
    .then(sneaker => res.redirect(`/sneakers/${sneaker._id}`));
}

function sneakerDelete(req, res) {
  Sneaker.findByIdAndDelete(req.params.id)
    .then(() => res.redirect('/sneakers'));
}
module.exports = {
  index: sneakersIndex,
  show: sneakersShow,
  new: sneakersNew,
  create: sneakersCreate,
  edit: sneakersEdit,
  update: sneakersUpdate,
  delete: sneakerDelete
};
