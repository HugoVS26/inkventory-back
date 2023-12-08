import { type Request } from "express";
import { type Types } from "mongoose";

export interface TattooStructure {
  _id: string;
  artist: string;
  email: string;
  instagram: string;
  city: string;
  direction: string;
  style: string;
  image: string;
  notes: string;
  isFavorite: boolean;
}

export type TattooStructureWithoutId = Omit<TattooStructure, "_id">;

export type TattooRequestWithoutId = Request<
  Record<string, unknown>,
  Record<string, unknown>,
  TattooStructureWithoutId
>;
