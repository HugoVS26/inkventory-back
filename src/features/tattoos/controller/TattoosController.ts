import { type NextFunction, type Request, type Response } from "express";
import { type TattoosRepository } from "../repository/types";
import {
  type TattooRequestWithId,
  type TattooRequestWithoutId,
} from "../types";
import CustomError from "../../../server/CustomError/CustomError.js";

class TattoosController {
  constructor(private readonly tattoosRepository: TattoosRepository) {}

  getTattoos = async (_req: Request, res: Response) => {
    const tattoos = await this.tattoosRepository.getTattoos();
    res.status(200).json({ tattoos });
  };

  deleteTattoo = async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    try {
      await this.tattoosRepository.deleteTattoo(id);

      res.status(200).json({ message: "The tattoo has been deleted" });
    } catch (error) {
      next(error);
    }
  };

  public addTattoo = async (
    req: TattooRequestWithoutId,
    res: Response,
    next: NextFunction,
  ) => {
    const newTattoo = req.body;
    try {
      const addedTattoo = await this.tattoosRepository.addTattoo(newTattoo);

      res.status(201).json({
        message: "The tattoo has been created succesfully",
        addedTattoo,
      });
    } catch (error) {
      next(error);
    }
  };

  public getTattooById = async (
    req: Request<{ tattooId: string }>,
    res: Response,
    next: NextFunction,
  ) => {
    const { tattooId } = req.params;

    try {
      const tattoo = await this.tattoosRepository.getTattooById(tattooId);

      res.status(200).json({ tattoo });
    } catch (error) {
      next(error);
    }
  };

  modifyTattoo = async (
    req: TattooRequestWithId,
    res: Response,
    next: NextFunction,
  ): Promise<void> => {
    try {
      const tattoo = req.body;
      const { tattooId } = req.params;

      const modifiedTattoo = await this.tattoosRepository.modifyTattoo(
        tattooId,
        tattoo,
      );

      res.status(200).json({ tattoo: modifiedTattoo });
    } catch (error) {
      const customError = new CustomError("Couldn't modify the tattoo.", 400);

      next(customError);
    }
  };
}

export default TattoosController;
