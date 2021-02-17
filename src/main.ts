import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FuzzyGuacamoleModule } from './app/fuzzy-guacamole.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(FuzzyGuacamoleModule).catch((err) => {
  console.error(err);
  console.error(':(');
});
