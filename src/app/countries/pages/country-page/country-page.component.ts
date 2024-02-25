import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { CountryService } from '../../country.service';
import { Country } from '../../interfaces/country';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-country-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './country-page.component.html',
  styles: ``
})



export class CountryPageComponent {
  
  country!:Country

  constructor(private activatedRoute: ActivatedRoute, private countriesService:CountryService, private router: Router){}
  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
    switchMap( ({ id }) => this.countriesService.searchCountryByAlphaCode( id )),
      )
        .subscribe( country => {
          if ( !country ) return this.router.navigateByUrl('');
          console.log(country);
          return this.country = country;
        });
  }
}
