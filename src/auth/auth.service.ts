import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor() {
  }
  async checkUser(email: string, password: string) {
	return email;
  }
}
