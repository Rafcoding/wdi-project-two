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

    model: 'Nike, Air Presto',
    price: 1800,
    image: 'https://www.stadiumgoods.com/media/catalog/product/cache/1/base/1000x600/9df78eab33525d08d6e5fb8d27136e95/a/a/aa3830_001_1_3.png',
    description: 'The Off-White x Converse Chuck 70 Hi is the second edition of the iconic sneaker designed by Virgil Abloh. This Chuck 70 is a departure from the transparent version that was part of Abloh\'s "The Ten" Collection. Released during the fall of 2018, this style has a more traditional canvas upper. The solid white canvas upper is contrasted with a unique treatment to the midsole, featuring black rubber stripes fused onto the classic vulcanized sole unit. The Chuck 70 also features many of Abloh’s signature design, including text printed on the medial sides, an orange tab on the All-Star logo, “SHOELACES” printed on the laces, and a large zip-tie. This Off-White x Converse Chuck 70 Hi is one of Abloh’s most memorable sneaker designs yet.'
  },
  {

    model: 'Nike Vapormax FK',
    price: 745,
    image: 'https://www.stadiumgoods.com/media/catalog/product/cache/1/base/1000x600/9df78eab33525d08d6e5fb8d27136e95/a/a/aa3831_002_1.png',
    description: 'After releasing “The Ten” collection in 2017, Virgil Abloh continued his collaboration with Nike in 2018 with more desirable sneakers. The second collection includes the black Off-White x Nike VaporMax with suede paneling added around the lace eyelets and a solid black Flyknit upper. A clear treatment is applied to the Swoosh that is stitched onto the sides, and the sneaker sits atop a full-length Air sole. Also released in a white colorway, the 2018 Off-White x Nike VaporMax “2.0” is just as sought after as the original.'
  },
  {

    model: 'Puma, Clyde Prd',
    price: 990,
    image: 'https://www.stadiumgoods.com/media/catalog/product/cache/1/base/1000x600/9df78eab33525d08d6e5fb8d27136e95/3/6/365742-01_1.png',
    description: 'From the three-way collaboration from Ronnie Fieg, High Snobiety and Puma, this luxurious version of the R698 features a quilted black nubuck upper highlighted by a speckled red heel.'
  },
  {

    model: 'Adidas, Yeezy Boost 350 V2',
    price: 950,
    image: 'https://www.stadiumgoods.com/media/catalog/product/cache/1/base/1000x600/9df78eab33525d08d6e5fb8d27136e95/c/p/cp9652_1.png',
    description: 'This first Yeezy sighting of 2017 is this adidas Yeezy Boost 350 V2 (CP9652), affectionately referred to as the "Black Red" colorway. Anchored by a woven black Primeknit upper and a matching TPU midsole (that covers Boost cushioning), the shoe features an tonal black look that\'s offset by red SPLY-350 messaging in reverse on the side panel. The stripe the Yeezy Boost 350 V2 model is known for does not appear, but that doesn\'t take away from the overall freshness of the shoe. Instead, this iteration of the adidas Yeezy Boost 350 V2 is a reminder that sometimes simple is better.'
  },
  {

    model: 'Air Jordan 4 Retro, Green/Black',
    price: 1100,
    image: 'https://www.stadiumgoods.com/media/catalog/product/cache/1/base/1000x600/9df78eab33525d08d6e5fb8d27136e95/3/0/308497_015_1.png',
    description: 'This Air Jordan 4 from the 2011 Doernbecher Freestyle collection is still one of the most popular Air Jordans ever released in the charitable collection benefiting the Doernbecher Children’s Hospital in Portland, Oregon. Designed by patient Isaiah Scott, the shoe features a black nubuck upper with vibrant contrast coloring and Isaiah’s own details including a Superman logo on each tongue and his portrait on the heels.'
  },
  {

    model: 'Air Jordan 1 Retro',
    price: 550,
    image: 'https://www.stadiumgoods.com/media/catalog/product/cache/1/base/1000x600/9df78eab33525d08d6e5fb8d27136e95/a/i/air_jordan_1_retro_136085-070_1.png',
    description: 'Released all the way back in 2003, this now-rare colorway of the Air Jordan 1 Mid features a black patent leather upper with gold accents.'
  },
  {

    model: 'Air Jordan 1 x OFF-WHITE NRG, Lightblue',
    price: 2400,
    image: 'https://www.stadiumgoods.com/media/catalog/product/cache/1/base/1000x600/9df78eab33525d08d6e5fb8d27136e95/a/q/aq0818_100_1.png',
    description: 'Virgil Abloh continued to focus his design attention on the Air Jordan 1 in 2018 by dropping a massively anticipated white colorway. The Air Jordan 1 x Off-White “White” was even harder to come by than the initial “Chicago” colorway that came out in 2017. The white version released exclusively at select retailers in Europe, and instantly became one of the most sought after sneaker releases of the year.'
  },
  {

    model: 'Air Jordan 1 x Off-White NRG, Blue',
    price: 880,
    image: 'https://www.stadiumgoods.com/media/catalog/product/cache/1/base/1000x600/9df78eab33525d08d6e5fb8d27136e95/a/q/aq0818_148_1.png',
    description: 'For his third edition of the monumental Off-White x Air Jordan 1, Virgil Abloh focused on the "UNC" colorway of Michael Jordan\'s first signature shoe. Released in June 2018, the Off-White x Air Jordan 1 "UNC" features the recognizable white and Carolina blue leather upper. The colors are complemented by Abloh\'s deconstructed aesthetic and signature details such as bright orange detailing and a red zip tie. Like the Chicago and all-white colorways before it, the Off-White x Air Jordan 1 UNC was an instant hit that was coveted by sneaker connoisseurs around the globe.'
  }
];

// Delete any existing sneakers
Sneaker.collection.drop();

Sneaker.create(sneakerData)
  .then(sneakers => {
    console.log(`Created ${sneakers.length} sneakers`);
    mongoose.connection.close();
  });
