import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";


export class RoleGuard implements CanActivate {

    constructor(private readonly reflector: Reflector) {

    }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    
        

        const request = context.switchToHttp().getRequest()

        const user = request.user

        if (user.role === 'admin') {

            return true

        }
        else {
            false
        }
        
    }


}