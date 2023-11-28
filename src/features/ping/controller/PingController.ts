import { type Request, type Response } from "express";

class PingController {
  getPong(_req: Request, res: Response) {
    res.status(200).json({ message: "Leeeeroy Jenkins!" });
  }
}

export default PingController;
