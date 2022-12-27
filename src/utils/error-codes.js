const ClientErrorCodes = {

    BAD_REQUEST : 400,
    UNAUTHORISED : 401,
    NOT_FOUND  : 404

}

Object.freeze(ClientErrorCodes);

const ServerErrorCodes = {


    INTERNAL_SERVER_ERROR : 500,
    NOT_IMPLEMENTED : 501

}

Object.freeze(ServerErrorCodes);

const SuccessCodes = {
    OK : 201,
    CREATED : 200
}

Object.freeze(SuccessCodes);

module.exports = {

    ClientErrorCodes,
    ServerErrorCodes,
    SuccessCodes

}