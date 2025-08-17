import jwt from "jsonwebtoken";
import type { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
dotenv.config();

declare global {
  namespace Express {
    interface Request {
      userId?: string;
    }
  }
}

export function auth(req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization!;
  const response = jwt.verify(token, process.env.JWT_SECRET!);
  if (typeof response === "object" && response !== null) {
    if ("userId" in response && typeof response.userId === "string") {
      req.userId = response.userId;
      next();
      return;
    }else{
        res.status(401).json({

        })
    }
  }
}

