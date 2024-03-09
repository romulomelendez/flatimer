import { Club } from "../../domain/models"

export interface CreateClubRepositoryInterface {
  execute: (
    params: CreateClubRepositoryInterface.Params,
  ) => Promise<CreateClubRepositoryInterface.Result>
}

export namespace CreateClubRepositoryInterface {
  export type Params = string
  export type Result = Club | null
}
