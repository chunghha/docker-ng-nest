import { Module, HttpModule } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';

import { join } from 'path';

import { AppServerModule } from '../src/main.server';
import { AppController } from './app.controller';
import { CountryService } from './country.service';

@Module({
  controllers: [AppController],
  imports: [
    HttpModule,
    AngularUniversalModule.forRoot({
      bootstrap: AppServerModule,
      viewsPath: join(process.cwd(), 'dist/docker-ng-nest/browser')
    })
  ],
  providers: [CountryService]
})
export class AppModule {}
