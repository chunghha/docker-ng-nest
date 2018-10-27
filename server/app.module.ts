import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/common/http';
import { AngularUniversalModule, applyDomino } from '@nestjs/ng-universal';
import { join } from 'path';

import { AppController } from './app.controller';
import { CountryService } from './counrty.service';

const BROWSER_DIR = join(process.cwd(), 'dist/browser');
applyDomino(global, join(BROWSER_DIR, 'index.html'));

@Module({
  imports: [
    HttpModule,
    AngularUniversalModule.forRoot({
      viewsPath: BROWSER_DIR,
      bundle: require('./../dist/server/main.js'),
    }),
  ],
  controllers: [AppController],
  providers: [CountryService]
})
export class ApplicationModule {}
