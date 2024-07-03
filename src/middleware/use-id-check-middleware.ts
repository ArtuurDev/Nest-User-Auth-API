import {NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";


export class UseIdCheckMiddleware implements NestMiddleware {

    use(req: Request, res: Response, next: NextFunction) {


        next()
    }
}