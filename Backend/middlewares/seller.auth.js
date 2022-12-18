const jwt = require("jsonwebtoken")


const authenticate = (req, res, next) => {
    const token = req.headers?.authorization?.split(" ")[1]
    // console.log(token);
    if (token) {
        const decoded = jwt.verify(token, 'hush')
        if (decoded) {
            const sellerId = decoded.sellerId
            req.body.sellerId = sellerId
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


module.exports =  authenticate