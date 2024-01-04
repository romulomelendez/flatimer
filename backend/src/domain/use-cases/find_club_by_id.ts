import { Club } from "../models/Club";

export interface FindClubById {
  perform(id: string): Promise<Club | null>
}
