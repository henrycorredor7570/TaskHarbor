import jwt from 'jsonwebtoken';

import { TOKEN_SECRET } from '../config.js';

export const authRequired  = (req, res, next) => {
    const { token } = req.cookies;
    console.log("Token from cookie:", token);
    if(!token) return res.status(401).json({message: "No token, authorization denied"});

    jwt.verify(token, TOKEN_SECRET, (err, user) => {
        if (err) {
            console.error("Error verifying token:", err);
            return res.status(403).json({ message: "Invalid token" });
        }

        req.user = user;
        console.log("User from token:", user); 
        next();
    })
}