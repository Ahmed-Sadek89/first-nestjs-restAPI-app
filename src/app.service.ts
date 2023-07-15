import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService { 
    public homepage() {
        return {
            message: 'hello, world'
        }
    }

}
