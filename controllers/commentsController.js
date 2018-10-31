const Sneaker = require('../models/sneaker');

function commentsCreate(req, res) {
  console.log(req.body);
  Sneaker
    .findById(req.params.id)
    .then(sneaker => {
      sneaker.comments.push(req.body);
      sneaker.save().then(sneaker => res.redirect(`/sneakers/${sneaker.id}`));
    });
}

function commentsDelete(req, res) {
  Sneaker
    .findById(req.params.sneakerId)
    .then(sneaker => {
      sneaker.comments.id(req.params.commentId).remove();
      sneaker.save().then(() => res.redirect(`/sneakers/${sneaker.id}`));
    });
}

module.exports = {
  create: commentsCreate,
  delete: commentsDelete
};
