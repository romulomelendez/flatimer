import { Club } from "../models/Club"

export interface FindClubByName {
  perform(name: string): Promise<Club | null>
}
