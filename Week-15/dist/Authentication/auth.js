import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
export function auth(req, res, next) {
    const token = req.headers.authorization;
    const response = jwt.verify(token, process.env.JWT_SECRET);
    if (typeof response === "object" && response !== null) {
        if ("userId" in response && typeof response.userId === "string") {
            req.userId = response.userId;
            next();
            return;
        }
        else {
            res.status(401).json({});
        }
    }
}
//# sourceMappingURL=auth.js.map