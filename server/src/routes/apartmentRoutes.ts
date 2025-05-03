import express from "express";
import {
  getApartments,
  getApartmentById,
  createApartment,
} from "../controllers/apartmentController";

const router = express.Router();

router.get("/apartments", getApartments);
router.get("/apartments/:id", getApartmentById);
router.post("/apartments", createApartment);

export default router;
