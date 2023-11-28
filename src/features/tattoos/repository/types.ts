import { type TattooStructure } from "../types";

export interface TattoosRepository {
  getTattoos: () => Promise<TattooStructure[]>;
}
