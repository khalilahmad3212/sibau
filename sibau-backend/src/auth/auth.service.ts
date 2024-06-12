// auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { EmployeeService } from '../employee/employee.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: EmployeeService,
    private jwtService: JwtService
  ) { }

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    console.log('here is user: ', user);

    if (user && user.Password === pass) { // Add a proper password check with bcrypt
      const { Password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    console.log('user in login: ', user);

    const payload = { email: user.email, sub: user.Id };
    return {
      accessToken: this.jwtService.sign(payload),
      user
    };
  }
}
