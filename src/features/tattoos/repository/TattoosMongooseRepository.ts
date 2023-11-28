import Tattoos from "../model/Tattoos.js";
import { type TattooStructure } from "../types";
import { type TattoosRepository } from "./types";

class TattoosMongooseRepository implements TattoosRepository {
  public async getTattoos(): Promise<TattooStructure[]> {
    const tattoos = await Tattoos.find({}).lean();

    return tattoos;
  }
}

export default TattoosMongooseRepository;
