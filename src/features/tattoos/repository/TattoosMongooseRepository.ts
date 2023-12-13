import CustomError from "../../../server/CustomError/CustomError.js";
import Tattoos from "../model/Tattoos.js";
import { type TattooStructureWithoutId, type TattooStructure } from "../types";
import { type TattoosRepository } from "./types";

class TattoosMongooseRepository implements TattoosRepository {
  public async getTattoos(): Promise<TattooStructure[]> {
    const tattoos = await Tattoos.find({}).lean().limit(10).sort({ _id: -1 });

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

  public async getTattooById(id: string): Promise<TattooStructure> {
    try {
      const tattoo = await Tattoos.findById(id);

      return tattoo!;
    } catch (error) {
      throw new CustomError("Couldn't find the tattoo", 404);
    }
  }

  public async modifyTattoo(
    id: string,
    tattoo: TattooStructure,
  ): Promise<TattooStructure | undefined> {
    try {
      const modifiedTattoo = await Tattoos.findByIdAndUpdate(
        id,
        { ...tattoo },
        { returnDocument: "after" },
      );

      return modifiedTattoo!;
    } catch (error) {
      throw new Error("Error modifying the tattoo" + (error as Error).message);
    }
  }
}

export default TattoosMongooseRepository;
