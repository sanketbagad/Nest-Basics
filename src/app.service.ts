import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'API created by Sanket Bagad As a part of the NESTJS course';
  }
}
