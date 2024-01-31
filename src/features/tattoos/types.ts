import { type Request } from "express";

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

export type TattooRequestWithId = Request<
  { tattooId: string },
  Record<string, unknown>,
  TattooStructure
>;

export type TattooRequestById = Request<{ tattooId: string }>;

export type UpdateTattooRequest = Request<
  Record<string, unknown>,
  Record<string, unknown>,
  { _id: string; isFavorite: boolean }
>;
