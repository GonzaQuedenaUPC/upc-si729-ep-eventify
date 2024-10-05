import {
  ApplicationConfig,
  EnvironmentProviders,
  importProvidersFrom,
  Provider,
  provideZoneChangeDetection
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Title } from '@angular/platform-browser';

const httpLoaderFactory= (http: HttpClient) => new TranslateHttpLoader(http);

export function globalProviders(): (Provider | EnvironmentProviders)[] {
  return [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(),
    Title,
    importProvidersFrom(TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      }
    }))
  ];
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    ...globalProviders()
  ]
};
