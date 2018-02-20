import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './root/root.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { GamesComponent } from './games/games.component';
import { HomeComponent } from './home/home.component';

import {GameService} from './services/game.service';



@NgModule({
  declarations: [
    RootComponent,
    HeaderComponent,
    FooterComponent,
    GamesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [GameService],
  bootstrap: [RootComponent]
})
export class AppModule { }
