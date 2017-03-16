import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChampionComponent } from './champion/champion.component';
import { SpellComponent } from './spell/spell.component';
import {HerosDataService} from './heros-data.service'

import { AlertModule } from 'ng2-bootstrap';
import { TabsModule } from 'ng2-bootstrap/tabs';
import { ProgressbarModule } from 'ng2-bootstrap/progressbar';
import { AccordionModule } from 'ng2-bootstrap/accordion';
import { ButtonsModule } from 'ng2-bootstrap/buttons';

@NgModule({
  declarations: [
    AppComponent,
    ChampionComponent,
    SpellComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AlertModule.forRoot(),
    TabsModule.forRoot(),
    ProgressbarModule.forRoot(),
    AccordionModule.forRoot(),
    ButtonsModule.forRoot()
  ],
  providers: [HerosDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
