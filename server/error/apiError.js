

class ApiError extends Error{
    constructor(message, status) {
        super();
        this.message = message
        this.status = status
    }
    static internal(message){
        return new ApiError(message, 500)
    }
    static badRequest(message){
        return new ApiError(message, 404)
    }
    static forBiden(message){
        return new ApiError(message, 403)
    }
}
module.exports = ApiError