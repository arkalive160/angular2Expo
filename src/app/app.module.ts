import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChampionComponent } from './champion/champion.component';
import { SpellComponent } from './spell/spell.component';

import {HerosDataService} from './heros-data.service'

@NgModule({
  declarations: [
    AppComponent,
    ChampionComponent,
    SpellComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [HerosDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
