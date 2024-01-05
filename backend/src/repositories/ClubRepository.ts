import { PrismaClient } from "@prisma/client"

import { FindClubByNameRepository, FindClubByIdRepository } from "../data/protocols"

export class ClubRepository implements FindClubByNameRepository, FindClubByIdRepository {

    findByName = async (params: FindClubByNameRepository.Params): Promise<FindClubByNameRepository.Result> => {
        
        const prisma = new PrismaClient()
        const club = await prisma.club.findUnique({
            where: {
                name: params.name
            }
        })

        // @ts-ignore
        return club 
    }

    findById = async (params: FindClubByIdRepository.Params): Promise<FindClubByIdRepository.Result> => {
        
        const prisma = new PrismaClient()
        const club = await prisma.club.findUnique({
            where: {
                id: params.id
            }
        })

        // @ts-ignore
        return club
    }
}