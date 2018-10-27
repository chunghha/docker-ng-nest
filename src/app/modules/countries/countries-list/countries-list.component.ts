import { Component, OnDestroy, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { untilDestroyed } from 'ngx-take-until-destroy';

import { CountriesService } from './countries.service';
import { Country } from '../../../interfaces/country.interface';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent implements OnDestroy, OnInit {

  countries: Observable<Country[]>;

  constructor(private countriesService: CountriesService) { }

  ngOnInit() {
    this.countries = this.countriesService.getCountries().pipe(untilDestroyed(this));
  }

  ngOnDestroy() { }

}
