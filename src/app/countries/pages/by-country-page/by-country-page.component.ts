import { Component } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { CountryTableComponent } from '../../components/country-table/country-table.component';
import { CountryService } from '../../country.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  standalone: true,
  imports: [SearchBoxComponent,CountryTableComponent],
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}
  handleSearchChange(searchValue: string) {
    console.log(searchValue); // Aquí puedes hacer lo que necesites con el valor de búsqueda
    this.countryService.searchByCountry(searchValue).subscribe((data) => {
      this.countries = data;
      console.log(this.countries);
    });
  }
  
}