import { PrismaClient } from "@prisma/client"
import { Request, Response, Router } from "express"

export const router = Router()

router.get("/api/allClubs", async (req: Request, res: Response) => {

    const prisma = new PrismaClient()
    const clubs = await prisma.club.findMany()

    if(!clubs)
        res.status(404).json("No one club found")
    
    res.status(200).json(clubs)
})

router.get("/api/timer/:soccerClub", async (req: Request, res: Response) => {

    const { soccerClub } = req.params

    const prisma = new PrismaClient()
    const club = await prisma.club.findUnique({
        where: {
            name: soccerClub
        }
    })

    if(!club)
        res.status(404).json("Club Not Found!")

    res.status(200).json(club)
})

router.post("/api/createClub", async (req: Request, res: Response) => {

    const prisma = new PrismaClient()
    const club = await prisma.club.create({
        data: {
            name: req.body.clubName,
            lastTitleDate: {
                create: {
                    name: req.body.lastTitle.name,
                    dateOfLastTitle: req.body.lastTitle.date,
                    years: req.body.lastTitle.years,
                    mounths: req.body.lastTitle.mounths,
                    days: req.body.lastTitle.days,
                    hours: req.body.lastTitle.hours,
                    minutes: req.body.lastTitle.minutes,
                    seconds: req.body.lastTitle.seconds
                }
            } 
        }
    })

    if(!club)
        return res.status(500).json("Error creating new club")
    
    res.status(201).json(club)
})