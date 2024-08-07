const {constants}=require('../constants')

const errorHandler=(err,req,res,next)=>{
    const statusCode=res.statusCode?res.statusCode:500
    
    switch (statusCode) {
        case constants.UNAUTHORIZED:
        res.status(statusCode).json({
            title:"Validation Failed",
            message:err.message,
            stackTree:err.stack
        })
            break;
            case constants.NOT_FOUND:    
            res.status(statusCode).json({
                title:"Not Found",
                message: err.message,
                stackTrace: err.stack
            });
            break

        case constants.UNAUTHORIZED:    
        res.status(statusCode).json({
            title:"UNAUTHORIZED",
            message: err.message,
            stackTrace: err.stack
        });
        break

        case constants.FORBIDDEN:    
        res.status(statusCode).json({
            title:"Forbidden",
            message: err.message,
            stackTrace: err.stack
        });
        break

        case constants.SERVER_ERROR:    
        res.status(statusCode).json({
            title:"Server Error",
            message: err.message,
            stackTrace: err.stack
        });
        break

        default:
            console.log("No Errors All Good !")
            break;
    }

    res.status(statusCode).json({
        title:"Not Found",
        message: err.message,
        stackTrace: err.stack
    });
}


module.exports = errorHandler;