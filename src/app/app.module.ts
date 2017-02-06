// Modules
import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { HttpModule }       from '@angular/http';
import { AppRoutingModule } from "./app-routing.module";

// Components
import { AppComponent }           from './app.component';
import { Enfant1Component }       from './enfant1/enfant1.component';
import { Enfant2Component }       from './enfant2/enfant2.component';
import { Enfant3Component }       from './enfant3/enfant3.component';
import { PetitEnfant1Component }  from './petit-enfant1/petit-enfant1.component';
import { Enfant4Component }       from './enfant4/enfant4.component';
import { Enfant5Component }       from './enfant5/enfant5.component';

// Services
import { conferenceService } from "./services/conferencesService";


@NgModule({
  declarations: [
    AppComponent,
    Enfant1Component,
    Enfant2Component,
    Enfant3Component,
    PetitEnfant1Component,
    Enfant4Component,
    Enfant5Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [conferenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
