const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  brand: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  color: {
    type: String,
    require: true,
  },
  category: [
    {
      type: String,
      enum: ["Baju", "Celana", "Aksesoris", "Jacket"],
      require: true,
    },
  ],
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
