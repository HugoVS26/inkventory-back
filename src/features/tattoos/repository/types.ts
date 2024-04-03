import { type TattooStructureWithoutId, type TattooStructure } from "../types";

export interface TattoosRepository {
  getTattoos: () => Promise<TattooStructure[]>;
  deleteTattoo: (id: string) => Promise<void>;
  addTattoo: (tattoo: TattooStructureWithoutId) => Promise<TattooStructure>;
  getTattooById: (id: string) => Promise<TattooStructure>;
  modifyTattoo: (
    id: string,
    tattoo: TattooStructure,
  ) => Promise<TattooStructure | undefined>;
}
