import { PrismaClient } from "@prisma/client"
import { Request, Response, Router } from "express"

export const router = Router()

router.get("/api/allClubs", async (_, res: Response) => {

    const prisma = new PrismaClient()  
    const clubs = await prisma.club.findMany()

    if(!clubs)
        return res.status(404).json("No one club found")
    
    res.status(200).json(clubs)
})

router.get("/api/timer/:clubName", async (req: Request, res: Response) => {

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

router.delete("/api/delete/:clubId", async (req: Request, res: Response) => {

    const { clubId } = req.params

    const prisma = new PrismaClient()

    // Verifying that club exists in database
    const club = await prisma.club.findUnique({
        where: {
            id: +clubId
        }
    })

    if(!club)
        return res.status(404).json("Nothing to delete!")

    const deleteTitles = prisma.title.deleteMany({
        where: {
            clubId: +clubId
        }
    })

    const deleteClub = prisma.club.delete({
        where: {
            id: +clubId
        }
    })

    try {
        await prisma.$transaction([deleteTitles, deleteClub])
    } catch (error) {
        res.status(500).json({
            message: "Error deleting Club"
        })
    }

    res.status(200).json({
        message: "Club successfully deleted!",
        body: club
    })
})