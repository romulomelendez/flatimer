import { Club } from "../../domain/models/Club"

export interface FindClubByIdRepository {
  findById: (params: FindClubByIdRepository.Params) => Promise<FindClubByIdRepository.Result>
}

export namespace FindClubByIdRepository {
  export type Params = { id: number }
  export type Result = Club
}