import { Request, Response, Router } from "express"

export const router = Router()

router.get("/api/timer/:soccerClub", (req: Request, res: Response) => {

    // const { soccerClub } = req.params

    res.status(200).json(
        {
            "dateOfLastTitle": "22031997",
            "years": 1,
            "mounths": 0,
            "days": 20,
            "hours": 14,
            "minutes": 5,
            "seconds": 0
        }
    )
})