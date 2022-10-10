import {StatusCodes} from "http-status-codes"
import CustomAPIError from "./custom-api"

class UnauthenticatedError {
    constructor(message) {
        super(message)
        this.StatusCodes = StatusCodes.UNAUTHORIZED
    }
}

export default UnauthenticatedError