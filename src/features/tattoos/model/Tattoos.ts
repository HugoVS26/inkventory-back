import mongoose from "mongoose";
import { type TattooStructure } from "../types";

const tattooSchema = new mongoose.Schema<TattooStructure>({
  artist: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  instagram: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  direction: {
    type: String,
    required: true,
  },
  style: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
    required: false,
  },
  isFavorite: {
    type: Boolean,
    required: true,
  },
});

const Tattoo = mongoose.model("Tattoo", tattooSchema, "tattoos");

export default Tattoo;
