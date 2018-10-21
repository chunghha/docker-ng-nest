import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/common/http';
import { AxiosResponse } from 'axios';

import { Observable } from 'rxjs';

@Injectable()
export class CountryService {
  constructor(private readonly httpService: HttpService) {}

  getCountries<T>(): Observable<AxiosResponse<T>> {
    return this.httpService.get('https://restcountries.eu/rest/v2/all');
  }
}
