import { type NextFunction, type Request, type Response } from "express";
import { type TattoosRepository } from "../repository/types";

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
}

export default TattoosController;
