import { Request, Response, Router } from "express"
import { PrismaClient } from "@prisma/client"

export const clubRoutes = Router()

clubRoutes.get("/api/club/allClubs", async (_, res: Response) => {

    const prisma = new PrismaClient()  
    const clubs = await prisma.club.findMany()

    if(!clubs)
        return res.status(404).json("No one club found")
    
    res.status(200).json(clubs)
})

clubRoutes.get("/api/club/name/:clubName", async (req: Request, res: Response) => {

    const { clubName } = req.params

    const prisma = new PrismaClient()
    const club = await prisma.club.findUnique({
        where: {
            name: clubName
        }
    })

    if(!club)
        res.status(404).json("Club Not Found!")

    res.status(200).json(club)
})

clubRoutes.get("/api/club/id/:clubId", async (req: Request, res: Response) => {

    const { clubId } = req.params

    const prisma = new PrismaClient()
    const club = await prisma.club.findUnique({
        where: {
            id: +clubId
        }
    })

    if(!club)
        return res.status(404).json("Club not found!")

    return res.status(200).json({
        message: "Club successfully found!",
        body: club
    })
})
