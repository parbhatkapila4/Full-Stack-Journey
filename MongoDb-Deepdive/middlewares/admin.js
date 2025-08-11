const {Admin} = require("../Database")
function adminMiddleware(req, res, next){
const username = req.headers.username;
const password = req.headers.password;

Admin.findOne({
    username: username,
    password: password
})

.then(function(value){

    if(value){
        next();
    }else{
        res.status(403).json({
            message: "Cannot Find Admin"
        })
    }
})

}

module.exports = adminMiddleware;