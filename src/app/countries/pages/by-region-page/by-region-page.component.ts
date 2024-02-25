import { Component } from '@angular/core';
import { CountryService } from '../../country.service';
import { Country } from '../../interfaces/country';
import { SearchBoxComponent } from '../../../shared/components/search-box/search-box.component';
import { CountryTableComponent } from '../../components/country-table/country-table.component';

@Component({
  selector: 'app-by-region-page',
  standalone: true,
  imports: [SearchBoxComponent,CountryTableComponent],
  templateUrl: './by-region-page.component.html',
  styles: ``
})
export class ByRegionPageComponent{
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}
  handleSearchChange(searchValue: string) {
    console.log(searchValue); // Aquí puedes hacer lo que necesites con el valor de búsqueda
    this.countryService.searchByRegion(searchValue).subscribe((data) => {
      this.countries = data;
      console.log(this.countries);
    });
  }

}
