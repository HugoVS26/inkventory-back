import CustomError from "../../../server/CustomError/CustomError.js";
import Tattoos from "../model/Tattoos.js";
import { type TattooStructure } from "../types";
import { type TattoosRepository } from "./types";

class TattoosMongooseRepository implements TattoosRepository {
  public async getTattoos(): Promise<TattooStructure[]> {
    const tattoos = await Tattoos.find({}).lean();

    return tattoos;
  }

  public async deleteTattoo(id: string): Promise<void> {
    try {
      await Tattoos.findByIdAndDelete(id);
    } catch (error) {
      throw new CustomError("Error deleting the tattoo", 400);
    }
  }
}

export default TattoosMongooseRepository;
