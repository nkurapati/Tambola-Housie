import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { GamesComponent } from './games/games.component';
import { PlayComponent } from './play/play.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'games', component: GamesComponent},
  {path: 'games/:id', component: PlayComponent},
  {path: 'rules', component: HomeComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
