// NPM Modules
import { Controller, Get, HttpCode, HttpStatus, Render } from '@nestjs/common';

// route: /
@Controller()
export class ViewController {
    // create constructor
    constructor() {}

    // route: /form
    @HttpCode(HttpStatus.OK)
    @Get('form')
    @Render('form')
    viewLogin() {}

    // route: /list
    @HttpCode(HttpStatus.OK)
    @Get('list')
    @Render('list')
    viewRegister() {}
}
