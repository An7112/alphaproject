const jwt = require("jsonwebtoken");
const JWTPRIVATEKEY = "nguyenthanhan7112001"
module.exports = (req, res, next) => {
    try {
        const token = req.header("x-auth-token");
        if (!token) return res.status(403).send("Access denied.");
        const decoded = jwt.verify(token, JWTPRIVATEKEY);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).send("Invalid token");
    }
};
