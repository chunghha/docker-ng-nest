import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { AxiosResponse } from '@nestjs/common/http/interfaces/axios.interfaces';

import { CountryService } from './counrty.service';

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

  @Get('api/countries')
  findAllCountries(@Res() response) {
    let countries = {};
    return this.countryService.getCountries().subscribe(
      (res: AxiosResponse<Restc>) => {
        countries = res.data;

        response.status(HttpStatus.OK).json(countries);
      });
  }
}
