import { Request, Response } from "express";
import Apartment from "../models/Apartments";

export const getApartments = async (req: Request, res: Response) => {
  try {
    const { name } = req.query;
    const query: any = {};
    if (name) {
      query.name = { $regex: new RegExp(name as string, "i") }; // case-insensitive search
    }

    const apartments = await Apartment.find(query);
    const transformedApartments = apartments.map((apartment) => ({
      id: apartment._id.toString(),
      name: apartment.name,
      location: apartment.location,
      description: apartment.description,
      price: apartment.price,
      imageUrl: apartment.imageUrl,
    }));
    res.json(transformedApartments);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch apartments" });
  }
};

export const getApartmentById = async (req: Request, res: Response) => {
  try {
    const apartment = await Apartment.findById(req.params.id);
    if (!apartment) {
      res.status(404).json({ message: "Apartment not found" });
      return;
    }
    res.json(apartment);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

export const createApartment = async (req: Request, res: Response) => {
  try {
    const apartment = new Apartment(req.body);
    await apartment.save();
    res.status(201).json({ message: "Unit added successfully." });
  } catch (error) {
    res.status(400).json({ message: "Failed to add apartment", error });
  }
};
