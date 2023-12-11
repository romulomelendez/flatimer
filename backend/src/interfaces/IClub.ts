import { Club } from "../entities/Club"

export interface IClub {

    // findById(id: string): Club

    findByName(name: string): Promise<Club | undefined>
}