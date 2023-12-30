import { Club } from "../../domain/models/Club"

export interface FindClubByNameRepository {
  findByName: (params: FindClubByNameRepository.Params) => Promise<FindClubByNameRepository.Result>
}

export namespace FindClubByNameRepository {
  export type Params = { name: string }
  export type Result = Club | null
}