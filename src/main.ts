import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import  routeConfig from './app/routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      routeConfig,
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled'
      })
    )
  ]
})
  .catch(err => console.error(err));
