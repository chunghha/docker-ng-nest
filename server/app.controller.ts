import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { AxiosResponse } from 'axios';

import { CountryService } from './country.service';

interface Country {
  name: string;
  capital?: string;
  subregion?: string;
  population?: number;
  flag?: string;
}

interface Restc {
  countries: Country[];
}

@Controller()
export class AppController {
  constructor(private countryService: CountryService) { }

  @Get('countries')
  findAllCountries(@Res() response) {
    let countries = {};
    return this.countryService.getCountries().subscribe(
      (res: AxiosResponse<Restc>) => {
        countries = res.data;

        response.status(HttpStatus.OK).json(countries);
      });
  }
}
