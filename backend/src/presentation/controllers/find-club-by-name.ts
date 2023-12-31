import { FindClubByName } from "../../domain/use-cases"
import { controller } from "../protocols"

export class FindClubByNameController implements controller {
    constructor(private readonly findClubByName: FindClubByName) {}
    handle = async (request: FindClubByNameController.Request) => {

        try {
            const clubName = request.name
            if (!clubName) {
                // return HttpHelper.BAD_REQUEST(new MissingParametersError())
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export namespace FindClubByNameController {
    export type Request = {
        name: string
    }
}