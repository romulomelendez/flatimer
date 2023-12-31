import { InternalServerError } from "../errors"
import { HttpResponse } from "../protocols"

export class HttpHelper {
  static BAD_REQUEST = (err: Error): HttpResponse<Error> => ({
    statusCode: 400,
    body: err,
  })

  static INTERNAL_SERVER_ERROR = (err: Error): HttpResponse<Error> => ({
    statusCode: 500,
    body: new InternalServerError(err.stack || ""),
  })

  static OK = <T>(data: T, message?: string): HttpResponse<T> => ({
    statusCode: 200,
    body: data,
    message,
  })

  static CREATED = <T>(data: T): HttpResponse<T> => ({
    statusCode: 201,
    body: data,
    message: "Club Successfully created",
  })

  static NO_CONTENT = (): HttpResponse<null> => ({
    statusCode: 204,
  })

  static NOT_FOUND = <T>(): HttpResponse<T> => ({
    statusCode: 404,
    message: "Club NOT FOUND",
  })
}
