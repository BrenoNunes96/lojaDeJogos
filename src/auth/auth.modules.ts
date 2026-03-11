import { forwardRef, Module } from "@nestjs/common";
import { Bcrypt } from "./bcrypt/bcrypt";
import { usuarioModule } from "../usuarios.module";
import { PassportModule } from "@nestjs/passport";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./constants/constants";
import { AuthService } from "./services/auth.service";
import { AuthController } from "./controllers/auth.Controller";
import { LocalStrategy } from "./strategy/localStrategy";

@Module({
    imports: [
        forwardRef(() => usuarioModule),
        PassportModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: {expiresIn: "1h"},
        })

    ],
    controllers: [AuthController],
    providers: [Bcrypt, AuthService, LocalStrategy],
    exports: [Bcrypt],
})
export class AuthModule {};