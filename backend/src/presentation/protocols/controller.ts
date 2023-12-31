import { HttpResponse } from "./"

export interface controller<T = any> {
    handle: (params: T) => Promise<HttpResponse<T>>
}