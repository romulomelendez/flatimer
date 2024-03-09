import { Controller, HttpHelper } from ".."
import { Club } from "../../domain/models"
import { CreateClubRepository } from "../../infrastructure/repository"

export class CreateClubController implements Controller {
  constructor(private readonly createClubRepository: CreateClubRepository) {}

  handle = async (params: Club) => {
    const club = await this.createClubRepository.execute(params)

    return HttpHelper.OK(club)
  }
}
