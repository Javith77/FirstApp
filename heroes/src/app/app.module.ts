import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//routes
import { APP_ROUTING } from "./app.routes";
//services
import { HeroesService } from "./services/heroes.service";
//components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroeSearchComponent } from './components/heroe-search/heroe-search.component';
import { HeroeCardComponent } from './components/heroe-card/heroe-card.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { registerLocaleData } from '@angular/common';
import  localEs from "@angular/common/locales/es";
import  localFr from "@angular/common/locales/fr";
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { DomsecurityPipe } from './pipes/domsecurity.pipe';
import { PasswordPipe } from './pipes/password.pipe';

registerLocaleData(localEs);
registerLocaleData(localFr);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    HeroeSearchComponent,
    HeroeCardComponent,
    PipesComponent,
    CapitalizePipe,
    DomsecurityPipe,
    PasswordPipe
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es'
    },
    HeroesService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
