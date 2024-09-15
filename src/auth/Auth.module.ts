import { Module } from "@nestjs/common";
import { JwtModule} from "@nestjs/jwt";


@Module({
    imports: [JwtModule.register({
        secret: 'fsdbuyvbcd553653665524442125ejhbhhvvWWWDEDD!!SEASAFC¨&)()(&¨$&&&'

    })]

})
export class AuthModule {

}