import { Request, Response, Router } from "express";

import { FindClubByNameRepository } from "../../infrastructure/repository";
import { FindClubByNameController } from "../../presentation/controllers/find-club-by-name";

export const clubRoutes = Router();

const findClubByNameRepository = new FindClubByNameRepository();
const findClubByNameController = new FindClubByNameController(
  findClubByNameRepository
);

clubRoutes.get("/api/club/name/:clubName", async ({ params:{ clubName }}: Request, res: Response) => {
    const { statusCode, body } = await findClubByNameController.handle(clubName)
    res.status(statusCode).json(body)
  }
)
