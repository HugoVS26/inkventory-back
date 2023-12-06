import { type TattooStructure } from "../types";

export interface TattoosRepository {
  getTattoos: () => Promise<TattooStructure[]>;
  deleteTattoo: (id: string) => Promise<void>;
}
