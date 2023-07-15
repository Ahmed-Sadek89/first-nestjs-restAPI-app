
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController { 
    constructor( private readonly appServices: AppService ) {}

    @Get()
    public homepage() {
        return this.appServices.homepage()
    }
}
