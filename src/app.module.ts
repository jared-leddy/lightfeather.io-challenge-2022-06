// NPM Modules
import { Module } from '@nestjs/common';

// Custom Modules
import { BackendModule } from './backend/backend.module';
import { ViewModule } from './views/view.module';

// create module from decorator
@Module({
    imports: [BackendModule, ViewModule],
    controllers: [],
    providers: []
})
export class AppModule {}
