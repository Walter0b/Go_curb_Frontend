export interface ResponseModel<T> {
    response: {
        Success : boolean
        Message : string
        Error   ?: string
        Data    ?: T | T[]
    }
}