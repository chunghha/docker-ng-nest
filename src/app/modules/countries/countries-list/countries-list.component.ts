import { Component, OnDestroy, OnInit } from '@angular/core';

import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable } from 'rxjs';

import { CountriesService } from './countries.service';
import { Country } from '../../../interfaces/country.interface';

@UntilDestroy()
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
