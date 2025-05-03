import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "";

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

const Apartment = mongoose.model("Apartment", apartmentSchema);

const seedData = [
  {
    name: "Palm Hills",
    location: "New Heliopolis, Egypt",
    description: "Luxury apartment in a gated compound.",
    area: 99,
    bedrooms: 2,
    bathrooms: 1,
    compoundName: "Palm Hills",
    deliveryIn: 2025,
    price: 1200000,
    imageUrl:
      "https://www.shutterstock.com/image-photo/new-modern-apartment-buildings-vancouver-600nw-2326087651.jpg",
  },
  {
    name: "New Cairo Heights",
    location: "New Cairo, Egypt",
    description: "Modern apartment near downtown.",
    area: 99,
    bedrooms: 2,
    bathrooms: 1,
    compoundName: "New Cairo",
    deliveryIn: 2025,
    price: 950000,
    imageUrl:
      "https://www.thehousedesigners.com/images/plans/01/EEA/bulk/7855/3019_3_m.webp",
  },
  {
    name: "Skyline Residences",
    location: "6th of October City, Egypt",
    description: "Spacious unit in a peaceful community.",
    area: 125,
    bedrooms: 3,
    bathrooms: 2,
    compoundName: "Mountain View iCity",
    deliveryIn: 2026,
    price: 1350000,
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2heEAr62IA8aYpqsaA_EiI-cMDzmaKRZGIA&s",
  },
  {
    name: "Zayed Park View",
    location: "Sheikh Zayed, Egypt",
    description: "Park-side living with modern amenities.",
    area: 110,
    bedrooms: 2,
    bathrooms: 2,
    compoundName: "Zed Towers",
    deliveryIn: 2024,
    price: 1450000,
    imageUrl: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
  },
  {
    name: "Maadi Greens",
    location: "Maadi, Cairo, Egypt",
    description: "Elegant apartment in a green neighborhood.",
    area: 105,
    bedrooms: 3,
    bathrooms: 2,
    compoundName: "Sarayat Maadi",
    deliveryIn: 2023,
    price: 1600000,
    imageUrl: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c",
  },
  {
    name: "Lakeview Gardens",
    location: "Fifth Settlement, New Cairo",
    description: "Lake-view apartment with high-end finish.",
    area: 140,
    bedrooms: 3,
    bathrooms: 2,
    compoundName: "Lake View Residence",
    deliveryIn: 2026,
    price: 1700000,
    imageUrl:
      "https://images.unsplash.com/photo-1515263487990-61b07816b324?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBhcnRtZW50JTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Downtown Pearl",
    location: "Downtown Cairo, Egypt",
    description: "Chic apartment close to historical landmarks.",
    area: 85,
    bedrooms: 1,
    bathrooms: 1,
    compoundName: "Capital Walk",
    deliveryIn: 2025,
    price: 800000,
    imageUrl: "https://images.unsplash.com/photo-1501183638710-841dd1904471",
  },
];

async function seedDB() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Connected to MongoDB");

    await Apartment.deleteMany(); // Optional: clear existing data
    await Apartment.insertMany(seedData);
    console.log("Database seeded!");

    process.exit();
  } catch (err) {
    console.error("Error seeding database:", err);
    process.exit(1);
  }
}

seedDB();
