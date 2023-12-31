import { FindClubByName } from "../../domain/use-cases"
import { controller } from "../protocols"
import { HttpHelper } from "../helpers"
import { MissingParametersError } from "../errors"

export class FindClubByNameController implements controller {
    constructor(private readonly findClubByName: FindClubByName) {}
    handle = async (request: FindClubByNameController.Request) => {

        try {
            const clubName = request.name
            
            if (!clubName) {
                return HttpHelper.BAD_REQUEST(new MissingParametersError())
            }

            const user = await this.findClubByName.perform(clubName)

            if(!user)
                return HttpHelper.NOT_FOUND()

            return HttpHelper.OK(user)
            
        } catch (error) {
            return HttpHelper.INTERNAL_SERVER_ERROR(error as Error)
        }
    }
}

export namespace FindClubByNameController {
    export type Request = {
        name: string
    }
}