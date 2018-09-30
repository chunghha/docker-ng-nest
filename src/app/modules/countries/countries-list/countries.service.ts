import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Country } from '../../../interfaces/country.interface';

@Injectable()
export class CountriesService {
  constructor(
    private http: HttpClient
  ) {}

  getCountries() {
    return this.http.get<Country[]>(`${environment.prerenderUrl}/api/countries`);
  }
}
