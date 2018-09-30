import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CountriesService } from './countries-list/countries.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: CountriesListComponent, pathMatch: 'full'}
    ]),
    SharedModule
  ],
  providers: [
    CountriesService
  ],
  declarations: [CountriesListComponent]
})
export class CountriesModule { }
