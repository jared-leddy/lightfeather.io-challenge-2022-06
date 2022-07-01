// NPM Modules
import { Module } from '@nestjs/common';

// Custom Modules
import { AccountModule } from './account/account.module';
import { ViewModule } from './views/view.module';

// create module from decorator
@Module({
    imports: [AccountModule, ViewModule],
    controllers: [],
    providers: []
})
export class AppModule {}
