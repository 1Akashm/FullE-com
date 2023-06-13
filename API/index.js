const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const shoes = [
  {
    id: 1,
    title: "Men's Sprint Runner in Black/multicolor",
    category:
      "To lessen our environmental impact and to reduce cotton consumption, we will no longer be providing a dust bag with our sneakers.",
    description:
      "Presented in black mesh and metallic leather with printed finishing, this Sprint Runner features a pieced and patched upper silhouette. The sneaker is detailed with an exploded Solarised Flower print, a Seal Logo on the side and an Alexander McQueen signature on the heel counter.",
    price: "990",
    image:
      "https://amq-mcq.dam.kering.com/m/681200e9f634b925/Large-750330W4WN31537_F.jpg?v=1",
  },
  {
    id: 2,
    title: "Men's Oversized Sneaker in White/garnet",
    category:
      "To lessen our environmental impact and to reduce cotton consumption, we will no longer be providing a dust bag with our sneakers.",
    description:
      "Presented in white calf leather, this Oversized Sneaker is detailed with a garnet and black Curve Tech print on the sides and heel counter. The sneaker is finished with the Alexander McQueen signature and a chunky rubber sole.",
    price: "790",
    image:
      "https://amq-mcq.dam.kering.com/m/34163ca8308b8366/Large-750336WIDJM8835_F.jpg?v=1",
  },
  {
    id: 3,
    title: "Nike Air Force 1 '07",
    category:
      "The stitched overlays on the upper add heritage style, durability and support.Originally designed for performance hoops, the Nike Air cushioning adds lightweight, all-day comfort.",
    description:
      "The radiance lives on in the Nike Air Force 1 '07, the basketball original that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.",
    price: "145",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_au…ac24-b0540fb3c00f/air-force-1-07-shoes-rWtqPn.png",
  },
  {
    id: 4,
    title: "Air Jordan 1 Retro High OG",
    category:
      "The Air-Sole unit in the heel provides the same lightweight cushioning that MJ enjoyed back in his playing days.",
    description:
      "Familiar but always fresh, the iconic Air Jordan 1 is remastered for today's sneakerhead culture. This Retro High OG version goes all in with premium leather, comfortable cushioning and classic design details.",
    price: "235",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_au…ff8d6/air-jordan-1-retro-high-og-shoes-DRDX5L.png",
  },
  {
    id: 5,
    title: "OLD SKOOL SHOE VANS",
    category:
      "Classic Old Skool™ Durable suede and canvas uppers Lace-up closure",
    description:
      "First unveiled back in 1977, the Vans Old Skool has been near the top of the bestseller list ever since thanks to its classic fit and instantly recognizable design. This black and navy version takes the Classic look and brings up a notch, allowing the twin shimmer of black and navy to breathe new life into the shoe",
    price: "70",
    image:
      "https://images.vans.com/is/image/Vans/VN000D3H_NVY…fmt=jpeg&qlt=90&resMode=sharp2&op_usm=0.9,1.7,8,0",
  },
  {
    id: 6,
    title: "adidas Yeezy Foam Runner 'Ochre' GW3354",
    category:
      "Adidas Shoe Collections: Running, Training, Basketball, Lifestyle Sneakers, Soccer Cleats, Outdoor/Hiking, Skateboarding, Tennis, and Sandals/Slides for versatile performance, style, and comfort.",
    description:
      "Make a statement in the new adidas Yeezy Foam Runner Ochre. A dark beige hue covers this one-piece foam build that has ventilation ports of varying shapes and dimensions. FOAM RNNR is seen on the interior collar with the shoe size, while Made in USA branding is displayed at heel.",
    price: "173",
    image:
      "https://cdn.shopify.com/s/files/1/0603/3031/1875/p…e992-4c17-907b-cdb879a631ac_540x.jpg?v=1656294031",
  },
  {
    id: 7,
    title: "Men's Gloss Oversized Sneaker in Navy",
    category:
      "To lessen our environmental impact and to reduce cotton consumption, we will no longer be providing a dust bag with our sneakers.",
    description:
      "Navy sneaker featuring a lux gloss high-frequency upper with calf leather heel counter and an oversized sole. Finished with an Alexander McQueen signature on tongue and heel counter. The sneaker comes with an additional set of tonal shoelaces.",
    price: "890",
    image:
      "https://amq-mcq.dam.kering.com/m/6d126392ae0d20fe/eCom-727405W4RY14203_F.jpg?v=6",
  },
  {
    id: 8,
    title: "New Balance Jamal Murray Two WXY V3 'Summer Basketball' BB2WYCG3",
    category:
      " Puma Shoe Collections: Offering a diverse range of stylish and innovative footwear, Puma delivers performance, comfort, and fashion-forward designs, making them a go-to choice for sports, lifestyle, and casual wear.",
    description:
      "The Puma Basketball Shoe combines style and performance, offering players optimal support, traction, and responsiveness on the court, making it an essential choice for basketball enthusiasts.",
    price: "335",
    image:
      "https://cdn.shopify.com/s/files/1/0603/3031/1875/p…f61d-480a-ad87-7f574e84a5c8_540x.png?v=1685677070",
  },
  {
    id: 9,
    title:
      "Under Armour Curry 2 Retro Basketball Shoes 'Northern Lights' 3026052-600",
    category:
      "Under Armour Shoe Collections: With a focus on athletic performance, Under Armour shoes provide exceptional comfort, support, and durability. Whether for running, training, or sports, they deliver top-notch performance and style.",
    description:
      "The Under Armour Basketball Shoe combines cutting-edge technology with sleek design, delivering superior support, traction, and responsiveness on the court. It's a must-have for basketball players seeking optimal performance and style.",
    price: "166",
    image:
      "https://cdn.shopify.com/s/files/1/0603/3031/1875/p…f24e-4d26-b6b2-8817446411aa_540x.jpg?v=1685066172",
  },
  {
    id: 10,
    title: "adidas Yeezy 700 V3 'Fade Carbon' GW1814",
    category:
      "Adidas Shoe Collections: Running, Training, Basketball, Lifestyle Sneakers, Soccer Cleats, Outdoor/Hiking, Skateboarding, Tennis, and Sandals/Slides for versatile performance, style, and comfort.",
    description:
      "One of the more eye-catching silhouettes from the Yeezy lineup, the 700 v3s have constantly surprised fans with colorways like Copper Fade and Mono Safflower. The recent Fade Carbon adds another sophisticated option to the mix, which features a gradient ranging from a mauve hue to a bright magenta to give the sneaker extra dimension.",
    price: "174",
    image:
      "https://cdn.shopify.com/s/files/1/0603/3031/1875/p…b472-42bf-8278-1e8771e77782_540x.jpg?v=1668077003",
  },
  {
    id: 11,
    title: "adidas Yeezy Boost 350 V2 'Cream White / Triple White' CP9366",
    category:
      "Adidas Shoe Collections: Running, Training, Basketball, Lifestyle Sneakers, Soccer Cleats, Outdoor/Hiking, Skateboarding, Tennis, and Sandals/Slides for versatile performance, style, and comfort.",
    description:
      "The Nike ACG Mountain Fly Gore-Tex are a versatile and stylish sneaker that can be worn on any occasion. They have a comfortable Primeknit upper that is perfect for any activity, and a full-length Boost midsole that provides incredible comfort and support. The translucent white midsole gives the sneaker a unique look that is sure to turn heads, and the Yeezy Boost 350 V2 ‘Cream White’ branding on the insole completes the look.",
    price: "380",
    image:
      "https://cdn.shopify.com/s/files/1/0603/3031/1875/p…3420-467b-8a0c-4cdcca180d16_540x.jpg?v=1685460279",
  },
  {
    id: 12,
    title: "Trophy Room x Air Jordan 7 Retro 'New Sheriff in Town' DM1195-474",
    category:
      " Nike Shoe Collections: Offering a diverse range of performance-driven footwear, Nike combines innovation, style, and comfort to meet the needs of athletes and fashion-conscious individuals.",
    description:
      "The Air Jordan 10 is a legendary basketball shoe, known for its iconic design, superior performance, and undeniable style. A true classic for sneaker enthusiasts.",
    price: "171",
    image:
      "https://cdn.shopify.com/s/files/1/0603/3031/1875/p…9f1a-43cf-bbec-4dcfd407749e_540x.jpg?v=1685447137",
  },
  {
    id: 13,
    title: "New Balance 9060 'Grey Day 2023' U9060MD1",
    category:
      "New Balance Shoe Collections: Known for their exceptional craftsmanship and emphasis on comfort, New Balance offers a versatile range of footwear for athletic performance and everyday wear.",
    description:
      "New Balance's range of lifestyle sneakers is endless, and their latest offering - the 9060 silhouette - is no exception. Taking inspiration from early 2000s running shoes like the 860, it combines 990 series technology to create a modern silhouette. The arctic grey mesh and suede uppers, navy padded tongue, and silver 'N' logo create a sleek look. Additionally, the ABZORB SBS heel cushioning and N-ERGY-enhanced midsoles provide a comfortable and bouncy feel with every step. Get your hands on a pair of these, available now on KICKS CREW.",
    price: "200",
    image:
      "https://cdn.shopify.com/s/files/1/0603/3031/1875/products/Group_20119_540x.png?v=1683709806",
  },
  {
    id: 14,
    title: "Converse Jack Purcell Renew Low 'Grey Twill' 169613C",
    category:
      " Converse Shoe Collections: Iconic for their timeless design and casual appeal, Converse offers a wide range of sneakers that blend style and comfort, making them a staple in fashion and streetwear.",
    description:
      "The Converse Jack Purcell Renew Low 'Grey Twill' 169613C is a modern twist on a timeless classic. With a sleek grey twill upper, this shoe offers a refined and versatile style, while still providing the signature comfort and durability that the Jack Purcell line is known for.",
    price: "54",
    image:
      "https://cdn.shopify.com/s/files/1/0603/3031/1875/p…efc7-4d10-811a-388d5407e0d8_540x.jpg?v=1656240479",
  },
  {
    id: 15,
    title: "Puma RS-X Mid Utility 'Galaxy Blue White' 369821-02",
    category:
      " Puma Shoe Collections - Innovative and stylish footwear encompassing performance, fashion, and comfort, catering to diverse sporting activities and everyday wear.",
    description:
      "The Puma RS-X Mid Utility 'Galaxy Blue White' 369821-02 combines futuristic design, practical utility features, and superior cushioning for style and comfort.",
    price: "137",
    image:
      "https://cdn.shopify.com/s/files/1/0603/3031/1875/p…906a-48b2-b590-57df053ee861_540x.jpg?v=1658282679",
  },
  {
    id: 16,
    title: "adidas Yeezy Boost 750 'Grey Gum' BB1840",
    category:
      "Adidas Shoe Collections: Running, Training, Basketball, Lifestyle Sneakers, Soccer Cleats, Outdoor/Hiking, Skateboarding, Tennis, and Sandals/Slides for versatile performance, style, and comfort.",
    description:
      "The Adidas Yeezy Boost 750 'Glow in the Dark' is a must-have sneaker for any fashion-savvy individual. Featuring a light grey nubuck upper with an elasticated mid-foot strap, this sneaker is both comfortable and stylish. The ankle zipper and perforated vamp add an extra touch of style, while the glow-in-the-dark translucent gum Boost midsole makes this sneaker truly unique.",
    price: "923",
    image:
      "https://cdn.shopify.com/s/files/1/0603/3031/1875/p…8c28-4d3a-b84f-aa8d21097365_540x.jpg?v=1656242402",
  },
  {
    id: 17,
    title: "New Balance 302 'White Nightwatch Green' CT302RA",
    category:
      "New Balance Shoe Collections: Known for their exceptional craftsmanship and emphasis on comfort, New Balance offers a versatile range of footwear for athletic performance and everyday wear.",
    description:
      "The New Balance 302 'White Nightwatch Green' CT302RA is a stylish and versatile shoe that combines a clean white design with accents of nightwatch green. It offers comfort, durability, and a touch of vibrant color to elevate your footwear game.",
    price: "87",
    image:
      "https://cdn.shopify.com/s/files/1/0603/3031/1875/p…15a6-40cd-ade7-e6fb3ee77504_540x.jpg?v=1663153566",
  },
  {
    id: 18,
    title:
      "Converse Offspring x Chuck 70 High 'Paisley - Natural Ivory' 169881C",
    category:
      "Converse Shoe Collections: Iconic for their timeless design and casual appeal, Converse offers a wide range of sneakers that blend style and comfort, making them a staple in fashion and streetwear.",
    description:
      "The Converse Offspring x Chuck 70 High 'Paisley - Natural Ivory' 169881C is a collaborative sneaker that combines the classic Chuck 70 silhouette with a paisley pattern design in natural ivory tones. This unique and stylish shoe offers a blend of heritage and contemporary flair for fashion-forward individuals.",
    price: "64",
    image:
      "https://cdn.shopify.com/s/files/1/0603/3031/1875/p…14fc-4874-9fcf-82c118ca5e7e_540x.jpg?v=1656235811",
  },
  {
    id: 19,
    title: "Nike Air Force 1 Low 'NAI-KE - Pale Ivory' FN0369-101",
    category:
      "Nike Shoe Collections - Cutting-edge athletic footwear encompassing performance, innovation, and trendsetting designs for sports, lifestyle, and active fashion enthusiasts.",
    description:
      "The Nike Air Force 1 Low 'NAI-KE - Pale Ivory' FN0369-101 combines iconic design with a pale ivory colorway for a classic and stylish look.",
    price: "119",
    image:
      "https://cdn.shopify.com/s/files/1/0603/3031/1875/p…b903-44b5-a258-c795ff75e0eb_540x.jpg?v=1684736757",
  },
  {
    id: 20,
    title: "Nike Dunk Low 'Mica Green' DV7212-300",
    category:
      "Nike Shoe Collections - Cutting-edge athletic footwear encompassing performance, innovation, and trendsetting designs for sports, lifestyle, and active fashion enthusiasts.",
    description:
      "Step into the future with Nike's Spring/Summer 2023 collection featuring the coveted Mica Green colorway. Introducing the Nike Dunk Low Mica Green, blending a sleek Photon Dust canvas with luxurious Mica Green leather uppers. Embracing its retro roots, the sneaker boasts a vintage-inspired sail midsole while Mica Green laces gracefully adorn the matching colored tongue. Elevate your style with this captivating addition to Nike's lineup!",
    price: "102",
    image:
      "https://cdn.shopify.com/s/files/1/0603/3031/1875/p…bf5a-4fc3-9925-8b859d0fa0f9_540x.jpg?v=1683693605",
  },
];

app.get("/", (req, res) => {
  res.send("hi");
});

app.get("/getAllShoes", (req, res) => {
  res.send(shoes);
});

app.get("/getShoe/:id", (req, res) => {
  console.log(
    req.params.id,
    req.body,
    typeof req.params.id,
    req.params.id,
    parseInt(req.params.id)
  );
  const filteredShoes = shoes.filter((s) => s.id === parseInt(req.params.id));
  // console.log(filteredShoes);
  res.send(filteredShoes);
});

app.get("/getPaginatedShoes/:id", (req, res) => {
  const pageLimit = req.params.id;
  const sliced = shoes.slice().splice(0, pageLimit);
  res.send(sliced);
});

app.listen(3001, () => {
  console.log("listening on port 3001...");
});
