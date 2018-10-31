const mongoose = require('mongoose');
const Sneaker = require('../models/sneaker');

mongoose.connect('mongodb://localhost/all-sneakers');

const sneakerData = [
  {

    model: 'Converse, Chuck 70 Hi Off White',
    price: 380,
    image: 'https://www.stadiumgoods.com/media/catalog/product/cache/1/base/1000x600/9df78eab33525d08d6e5fb8d27136e95/1/6/163862C_1.png',
    description: 'The Off-White x Converse Chuck 70 Hi is the second edition of the iconic sneaker designed by Virgil Abloh. This Chuck 70 is a departure from the transparent version that was part of Abloh\'s "The Ten" Collection. Released during the fall of 2018, this style has a more traditional canvas upper. The solid white canvas upper is contrasted with a unique treatment to the midsole, featuring black rubber stripes fused onto the classic vulcanized sole unit. The Chuck 70 also features many of Abloh’s signature design, including text printed on the medial sides, an orange tab on the All-Star logo, “SHOELACES” printed on the laces, and a large zip-tie. This Off-White x Converse Chuck 70 Hi is one of Abloh’s most memorable sneaker designs yet.'
  },
  {

    model: 'Nike, The 10: Nike Blazer Mid',
    price: 849,
    image: 'https://www.stadiumgoods.com/media/catalog/product/cache/1/base/1000x600/9df78eab33525d08d6e5fb8d27136e95/a/a/aa3832_002_4a.png',
    description: 'The Serena Williams x Off-White x Nike Blazer “Queen” is a special edition of the popular silhouette by Virgil Abloh honoring the tennis legend. First unveiled shortly before the 2018 US Open tennis tournament, the shoe released in October 2018 to great anticipation. The colorful Blazer was designed by Abloh to honor Williams\'s illustrious and dominant career. The upper features a light grey leather and translucent material with an eye-catching pink-to-purple gradient on the midsole. The oversized Swoosh and the medial branding text appears in black, while neon accents reference a tennis ball.'
  },
  {

    model: 'New Balance, ML574TSN',
    price: 900,
    image: 'https://www.stadiumgoods.com/media/catalog/product/cache/1/base/1000x600/9df78eab33525d08d6e5fb8d27136e95/M/L/ML574TSN_1.png',
    description: 'From the three-way collaboration from Ronnie Fieg, High Snobiety and New Balance, this luxurious version of the R698 features a quilted black nubuck upper highlighted by a speckled red heel.'
  },
  {

    model: 'Converse, Chuck 70 Hi',
    price: 999,
    image: 'https://www.stadiumgoods.com/media/catalog/product/cache/1/base/1000x600/9df78eab33525d08d6e5fb8d27136e95/1/6/162204c_1_1.png',
    description: 'It received less attention than the other Nike and Air Jordan models in the OFF-WHITE x Nike “The Ten” collection, but the Converse Chuck Taylor All Star by Virgil Abloh is no less important. Released in early 2018—much later than the rest of the pack—the Chuck Taylor is the final installment in one of the most storied sneaker collaborations. The Chuck Taylor is inspired by the idea of "Ghosting" and features a translucent upper with clear outsoles. The word “Vulcanized" is boldly printed on each heel.'
  },
  {

    model: 'Converse, Chuck 70 Hi Off White',
    price: 380,
    image: 'https://www.stadiumgoods.com/media/catalog/product/cache/1/base/1000x600/9df78eab33525d08d6e5fb8d27136e95/1/6/163862C_1.png',
    description: 'The Off-White x Converse Chuck 70 Hi is the second edition of the iconic sneaker designed by Virgil Abloh. This Chuck 70 is a departure from the transparent version that was part of Abloh\'s "The Ten" Collection. Released during the fall of 2018, this style has a more traditional canvas upper. The solid white canvas upper is contrasted with a unique treatment to the midsole, featuring black rubber stripes fused onto the classic vulcanized sole unit. The Chuck 70 also features many of Abloh’s signature design, including text printed on the medial sides, an orange tab on the All-Star logo, “SHOELACES” printed on the laces, and a large zip-tie. This Off-White x Converse Chuck 70 Hi is one of Abloh’s most memorable sneaker designs yet.'
  },
  {

    model: 'Nike, The 10: Nike Blazer Mid',
    price: 849,
    image: 'https://www.stadiumgoods.com/media/catalog/product/cache/1/base/1000x600/9df78eab33525d08d6e5fb8d27136e95/a/a/aa3832_002_4a.png',
    description: 'The Serena Williams x Off-White x Nike Blazer “Queen” is a special edition of the popular silhouette by Virgil Abloh honoring the tennis legend. First unveiled shortly before the 2018 US Open tennis tournament, the shoe released in October 2018 to great anticipation. The colorful Blazer was designed by Abloh to honor Williams\'s illustrious and dominant career. The upper features a light grey leather and translucent material with an eye-catching pink-to-purple gradient on the midsole. The oversized Swoosh and the medial branding text appears in black, while neon accents reference a tennis ball.'
  },
  {

    model: 'New Balance, ML574TSN',
    price: 900,
    image: 'https://www.stadiumgoods.com/media/catalog/product/cache/1/base/1000x600/9df78eab33525d08d6e5fb8d27136e95/M/L/ML574TSN_1.png',
    description: 'From the three-way collaboration from Ronnie Fieg, High Snobiety and New Balance, this luxurious version of the R698 features a quilted black nubuck upper highlighted by a speckled red heel.'
  },
  {

    model: 'Converse, Chuck 70 Hi',
    price: 999,
    image: 'https://www.stadiumgoods.com/media/catalog/product/cache/1/base/1000x600/9df78eab33525d08d6e5fb8d27136e95/1/6/162204c_1_1.png',
    description: 'It received less attention than the other Nike and Air Jordan models in the OFF-WHITE x Nike “The Ten” collection, but the Converse Chuck Taylor All Star by Virgil Abloh is no less important. Released in early 2018—much later than the rest of the pack—the Chuck Taylor is the final installment in one of the most storied sneaker collaborations. The Chuck Taylor is inspired by the idea of "Ghosting" and features a translucent upper with clear outsoles. The word “Vulcanized" is boldly printed on each heel.'
  },
  {

    model: 'Converse, Chuck 70 Hi Off White',
    price: 380,
    image: 'https://www.stadiumgoods.com/media/catalog/product/cache/1/base/1000x600/9df78eab33525d08d6e5fb8d27136e95/1/6/163862C_1.png',
    description: 'The Off-White x Converse Chuck 70 Hi is the second edition of the iconic sneaker designed by Virgil Abloh. This Chuck 70 is a departure from the transparent version that was part of Abloh\'s "The Ten" Collection. Released during the fall of 2018, this style has a more traditional canvas upper. The solid white canvas upper is contrasted with a unique treatment to the midsole, featuring black rubber stripes fused onto the classic vulcanized sole unit. The Chuck 70 also features many of Abloh’s signature design, including text printed on the medial sides, an orange tab on the All-Star logo, “SHOELACES” printed on the laces, and a large zip-tie. This Off-White x Converse Chuck 70 Hi is one of Abloh’s most memorable sneaker designs yet.'
  },
  {

    model: 'Nike, The 10: Nike Blazer Mid',
    price: 849,
    image: 'https://www.stadiumgoods.com/media/catalog/product/cache/1/base/1000x600/9df78eab33525d08d6e5fb8d27136e95/a/a/aa3832_002_4a.png',
    description: 'The Serena Williams x Off-White x Nike Blazer “Queen” is a special edition of the popular silhouette by Virgil Abloh honoring the tennis legend. First unveiled shortly before the 2018 US Open tennis tournament, the shoe released in October 2018 to great anticipation. The colorful Blazer was designed by Abloh to honor Williams\'s illustrious and dominant career. The upper features a light grey leather and translucent material with an eye-catching pink-to-purple gradient on the midsole. The oversized Swoosh and the medial branding text appears in black, while neon accents reference a tennis ball.'
  },
  {

    model: 'New Balance, ML574TSN',
    price: 900,
    image: 'https://www.stadiumgoods.com/media/catalog/product/cache/1/base/1000x600/9df78eab33525d08d6e5fb8d27136e95/M/L/ML574TSN_1.png',
    description: 'From the three-way collaboration from Ronnie Fieg, High Snobiety and New Balance, this luxurious version of the R698 features a quilted black nubuck upper highlighted by a speckled red heel.'
  },
  {

    model: 'Converse, Chuck 70 Hi',
    price: 999,
    image: 'https://www.stadiumgoods.com/media/catalog/product/cache/1/base/1000x600/9df78eab33525d08d6e5fb8d27136e95/1/6/162204c_1_1.png',
    description: 'It received less attention than the other Nike and Air Jordan models in the OFF-WHITE x Nike “The Ten” collection, but the Converse Chuck Taylor All Star by Virgil Abloh is no less important. Released in early 2018—much later than the rest of the pack—the Chuck Taylor is the final installment in one of the most storied sneaker collaborations. The Chuck Taylor is inspired by the idea of "Ghosting" and features a translucent upper with clear outsoles. The word “Vulcanized" is boldly printed on each heel.'
  }
];

// Delete any existing sneakers
Sneaker.collection.drop();

Sneaker.create(sneakerData)
  .then(sneakers => {
    console.log(`Created ${sneakers.length} sneakers`);
    mongoose.connection.close();
  });
