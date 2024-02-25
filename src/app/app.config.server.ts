import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering()
  ]
};
import { ReactiveFormsModule } from '@angular/forms';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';
import { TestBed } from '@angular/core/testing';


export const config = mergeApplicationConfig(appConfig, serverConfig);
