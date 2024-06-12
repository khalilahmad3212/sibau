// auth/auth.module.ts
import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';
// import { UsersModule } from '../users/users.module'; // Assume you have a Users module
import { EmployeeModule } from '../employee/employee.module';
import { ConfigModule } from '@nestjs/config';
import { LocalStrategy } from './local.strategy';
import { JwtAuthGuard } from './jwt-auth.guard';
@Module({
  imports: [
    // UsersModule, // Make sure to import Users module
    EmployeeModule,
    PassportModule.register({ session: false }),
    ConfigModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'secretKey', // Move this to a config service or environment variable
      signOptions: { expiresIn: '7d' },
    }),
  ],
  providers: [AuthService, JwtStrategy, LocalStrategy, JwtAuthGuard],
  controllers: [AuthController],
})
export class AuthModule { }
