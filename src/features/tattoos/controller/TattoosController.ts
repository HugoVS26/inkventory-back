import { type Request, type Response } from "express";
import { type TattoosRepository } from "../repository/types";

class TattoosController {
  constructor(private readonly tattoosRepository: TattoosRepository) {}

  getTattoos = async (_req: Request, res: Response) => {
    const tattoos = this.tattoosRepository.getTattoos();
    res.status(200).json({ tattoos });
  };
}

export default TattoosController;
