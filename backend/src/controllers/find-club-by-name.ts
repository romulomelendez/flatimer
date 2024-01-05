import { Request, Response } from 'express'
import { Club } from '../domain/models/Club';
import { PrismaClient } from '@prisma/client';

export class FindClubByNameController {
  constructor(private userService: UserService) {}

  async handle(req: Request, res: Response): Promise<Club | null> {
    const { clubId } = req.params

    const prisma = new PrismaClient()
    const club = await prisma.club.findUnique({
        where: {
            id: +clubId
        }
    })

    if(!club)
        res.status(404).json("Club not found!")

    res.status(200).json({
        message: "Club successfully found!",
        body: club
    })
  }
}


export namespace FindClubByNameController {
    export type Request = {
        name: string
    }
}