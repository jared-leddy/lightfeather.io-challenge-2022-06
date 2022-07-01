// Core Modules
import { join } from 'path';

// NPM Modules
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';

// Custom Modules
import { AppModule } from './app.module';
import { DataResponseInterceptor } from './utils/interceptors';

async function bootstrap() {
    // create express based app
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    // use validation pipeline
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true
        })
    );
    app.useStaticAssets(join(__dirname, '..', 'public'));
    app.setBaseViewsDir(join(__dirname, '..', 'views'));
    app.setViewEngine('pug');
    // add url prefix with exceptions
    app.setGlobalPrefix('api', {
        exclude: ['/form', '/list']
    });
    // setup global response wrapper for "data"
    app.useGlobalInterceptors(new DataResponseInterceptor());
    // listen on express app port
    await app.listen(8000);
}
// start app
bootstrap();
