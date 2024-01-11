import { Request, Response, Router } from "express"

import { FindClubByNameRepository, GetAllClubsRepository } from "../../infrastructure/repository"
import { FindClubByNameController, GetAllClubsController } from "../../presentation/controllers"

export const clubRoutes = Router()


clubRoutes.get("/api/club/name/:clubName",
  async ({ params: { clubName } }: Request, res: Response) => {
  
    const findClubByNameRepository = new FindClubByNameRepository()
    const findClubByNameController = new FindClubByNameController(findClubByNameRepository)

    const { statusCode, body } = await findClubByNameController.handle(clubName)

    res.status(statusCode).json(body)
  }
)

clubRoutes.get("/api/club/all",
  async (_: Request, res: Response) => {

    const getAllClubsRepository = new GetAllClubsRepository()
    const getAllClubsController = new GetAllClubsController(getAllClubsRepository)
    
    const { statusCode, body } = await getAllClubsController.handle()

    res.status(statusCode).json(body)
  }
)