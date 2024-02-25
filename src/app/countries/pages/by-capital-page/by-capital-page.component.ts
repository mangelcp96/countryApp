import { Component } from '@angular/core';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { Country } from '../../interfaces/country';
import { CountryService } from '../../country.service';
import { CountryTableComponent } from '../../components/country-table/country-table.component';

@Component({
  selector: 'app-by-capital-page',
  standalone: true,
  imports: [SearchBoxComponent, CountryTableComponent],
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}
  handleSearchChange(searchValue: string) {
    console.log(searchValue); // Aquí puedes hacer lo que necesites con el valor de búsqueda
    this.countryService.searchByCapital(searchValue).subscribe((data) => {
      this.countries = data;
      console.log(this.countries);
    });
  }
  
}
