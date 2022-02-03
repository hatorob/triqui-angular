import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/shared/home/home.component';
import { GameComponent } from './components/game/game.component';

//Routing
import { APP_ROUTING } from './app.routes';
//Servicios
import { GameService } from './servicios/game.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    GameService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
