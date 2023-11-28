import { Router } from "express";
import TattoosController from "../controller/TattoosController.js";
import TattooMongooseRepository from "../repository/TattoosMongooseRepository.js";

const tattoosRepository = new TattooMongooseRepository();
const tattoosController = new TattoosController(tattoosRepository);
const tattoosRouter = Router();

tattoosRouter.get("/", tattoosController.getTattoos);

export default tattoosRouter;
