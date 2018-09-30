import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { MatCardModule, MatToolbarModule } from '@angular/material';
import { TransferHttpCacheModule } from '@nguniversal/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from './modules/shared/shared.module';
import { WindowService } from './services/window/window.service';


// For AoT compilation:
export function getWindow() {
  return window;
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    // Add .withServerTransition() to support Universal rendering.
    // The application ID can be any identifier which is unique on
    // the page.
    BrowserModule.withServerTransition({appId: 'my-app'}),
    HttpClientModule,
    TransferHttpCacheModule,

    MatCardModule,
    MatToolbarModule,

    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full'},
      { path: 'countries', loadChildren: './modules/countries/countries.module#CountriesModule'}
    ]),
    SharedModule
  ],
  providers: [
    {
      provide: WindowService,
      useFactory: getWindow
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
