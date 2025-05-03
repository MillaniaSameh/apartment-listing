import mongoose from "mongoose";

const apartmentSchema = new mongoose.Schema({
  name: String,
  location: String,
  description: String,
  area: Number,
  bedrooms: Number,
  bathrooms: Number,
  compoundName: String,
  deliveryIn: Number,
  price: Number,
  imageUrl: String,
});

export default mongoose.model("Apartment", apartmentSchema);
