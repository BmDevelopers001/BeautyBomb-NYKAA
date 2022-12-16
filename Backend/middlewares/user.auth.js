const jwt = require("jsonwebtoken")


const Userauthenticate = (req, res, next) => {
    const token = req.headers?.authorization?.split(" ")[1]
    if (token) {
        const decoded = jwt.verify(token, 'yogi')
        if (decoded) {
            // console.log(decoded)
            const userID = decoded.userID
            req.body.userID = userID
            next()
        }
        else {
            res.send({ "msg": "Please login" })
        }
    }
    else {
        res.send({ "msg": "Please login" })
    }
}

module.exports = {
    Userauthenticate
}