import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Country } from './interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private apiURL = 'https://restcountries.com/v3.1'; // Asegúrate de que la URL es correcta para la versión de la API que estás utilizando

  constructor(private http: HttpClient) {}

  searchByCapital(term: string): Observable<Country[]> {
    const url = `${this.apiURL}/capital/${term}`;
    return this.http.get<Country[]>(url)
    .pipe(
      catchError(error => of([])) // Si hay un error se vacía el array de resultados
    );
  }

  searchByCountry(name: string): Observable<Country[]> {
    const url = `${this.apiURL}/name/${name}`;
    return this.http.get<Country[]>(url)
      .pipe(catchError(error => of([]))); // Manejo de errores igual que en searchByCapital
  }

  searchByRegion(region: string): Observable<Country[]> {
    const url = `${this.apiURL}/region/${region}`;
    return this.http.get<Country[]>(url)
      .pipe(catchError(error => of([]))); // Manejo de errores igual que en searchByCapital
  }
  searchCountryByAlphaCode( code: string ): Observable<Country | null> {

    const url = `${ this.apiURL}/alpha/${ code }`;
  
      return this.http.get<Country[]>( url )
        .pipe(
          map( countries => countries.length > 0 ? countries[0]: null ),
          catchError( () => of(null) ) // cuidado con la importación de map en `rxjs`
        );
    }
}
