import CustomError from "../../../server/CustomError/CustomError.js";
import Tattoos from "../model/Tattoos.js";
import { type TattooStructureWithoutId, type TattooStructure } from "../types";
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

  public async addTattoo(
    tattoo: TattooStructureWithoutId,
  ): Promise<TattooStructure> {
    try {
      const newTattoo = await Tattoos.create(tattoo);

      return newTattoo;
    } catch (error) {
      throw new CustomError("Error creating the new tattoo", 400);
    }
  }
}

export default TattoosMongooseRepository;
