import { Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';
import { countryRoutes } from './countries/country.routes'; // Asegúrate de que la ruta esté correcta

export const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'contact', component: ContactPageComponent },
  {
    path: 'countries',
    children: countryRoutes
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
