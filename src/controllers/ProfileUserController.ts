import { Request, Response } from "express";
import { ProfileUserService } from "../services/ProfileUserService";

class ProfileUserController {
  async handle(res: Response, req: Request) {
    const { user_id } = req;

    const service = new ProfileUserService();

    const result = await service.execute(user_id);

    return res.json(result);
  }
}

export { ProfileUserController };
