// NPM Modules
import { Body, Controller, Get, Post } from '@nestjs/common';
import { Request, Response } from 'express';

// Custom Modules
import { BackendService } from './backend.service';
import { BackendTicketDTO } from './dto';

// setup all subsequent controller methods to access jwt guard
// route: /
@Controller()
export class BackendController {
    // create constructor
    constructor(private backendService: BackendService) {}

    // route: /supervisors
    @Get('supervisors')
    getSupervisors(@Body() req: Request, res: Response) {
        return this.backendService.getSupervisors(req);
    }

    // route: /submit
    @Post('submit')
    postSubmit(@Body() data: BackendTicketDTO) {
        return this.backendService.postSubmit(data);
    }
}
