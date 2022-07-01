// NPM Modules
import { Module } from '@nestjs/common';

// Custom Modules
import { ViewController } from './view.controller';

@Module({
    imports: [],
    exports: [],
    controllers: [ViewController],
    providers: []
})
export class ViewModule {}
