// NPM Modules
import { Module } from '@nestjs/common';

// Custom Modules
import { BackendController } from './backend.controller';
import { BackendService } from './backend.service';

// create module decorator
// create class auth module
@Module({
    imports: [],
    exports: [],
    controllers: [BackendController],
    providers: [BackendService]
})
export class BackendModule {}
