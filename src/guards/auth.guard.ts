import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { AuthService } from "src/auth/Auth.service";


@Injectable()
export class AuthGuard implements CanActivate {


    constructor(private readonly service: AuthService) {

    }
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        

        
        const request = context.switchToHttp().getRequest()
    
        const {authorization} = request.headers

        try {
        const data = this.service.checkToken((authorization ?? '').split(' ')[1])

        request.user = data
        return true
 
        } catch (e) {

            return false
        }  

    }

}