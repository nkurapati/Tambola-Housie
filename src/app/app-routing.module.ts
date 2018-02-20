import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { GamesComponent } from './games/games.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'games', component: GamesComponent},
  {path: 'rules', component: HomeComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
