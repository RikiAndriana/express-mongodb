const mongoose = require("mongoose");

const Product = require("./models/product");

mongoose
  .connect("mongodb://127.0.0.1/shop_db")
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((error) => {
    console.log(error);
  });

const seedProduct = [
  {
    name: "Kemeja Flanel",
    brand: "Hollister",
    price: 750000,
    color: "biru muda",
    category: "Baju",
  },
  {
    name: "Celana Chino",
    brand: "Levi's",
    price: 900000,
    color: "krem",
    category: "Celana",
  },
  {
    name: "Sweater",
    brand: "Gap",
    price: 650000,
    color: "merah muda",
    category: "Jacket",
  },
  {
    name: "Hoodie",
    brand: "Nike",
    price: 1200000,
    color: "putih",
    category: "Jacket",
  },
  {
    name: "Hoodie",
    brand: "Herschel",
    price: 1500000,
    color: "biru",
    category: "Jacket",
  },
  {
    name: "Kacamata Aviator",
    brand: "Ray-Ban",
    price: 2000000,
    color: "emas",
    category: "Aksesoris",
  },
  {
    name: "Baju Renang",
    brand: "Speedo",
    price: 500000,
    color: "biru tua",
    category: "Baju",
  },
  {
    name: "Jersey",
    brand: "New Era",
    price: 350000,
    color: "hitam",
    category: "Baju",
  },
  {
    name: "Rompi",
    brand: "Zara",
    price: 850000,
    color: "abu-abu",
    category: "Jacket",
  },
  {
    name: "Jas",
    brand: "Hugo Boss",
    price: 4500000,
    color: "hitam",
    category: "Baju",
  },
  {
    name: "Kaos",
    brand: "Gucci",
    price: 8000000,
    color: "coklat",
    category: "Baju",
  },
];

Product.insertMany(seedProduct)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
