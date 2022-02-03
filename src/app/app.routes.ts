import { RouterModule, Routes } from "@angular/router";
import { GameComponent } from "./components/game/game.component";
import { HomeComponent } from './components/shared/home/home.component';


const APP_ROUTES: Routes = [
    { path: 'game', component: GameComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'game' }
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);