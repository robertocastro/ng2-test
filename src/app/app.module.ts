import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { Enfant1Component } from './enfant1/enfant1.component';
import { Enfant2Component } from './enfant2/enfant2.component';
import { Enfant3Component } from './enfant3/enfant3.component';
import { PetitEnfant1Component } from './petit-enfant1/petit-enfant1.component';
import { Enfant4Component } from './enfant4/enfant4.component';

/*TODO mettre dans dans route.ts*/
const appRoutes: Routes = [
  { path: 'enfant1',
    component: Enfant1Component,
    children: [{
      path: ':id',
      component: PetitEnfant1Component,
    }]
  },
  {
    path: 'enfant2',
    component: Enfant2Component,
    data: { label: 'labelParent' } //donnee statique readonly
  },
  { path: 'enfant3', component: Enfant3Component },
  { path: 'enfant4', component: Enfant4Component },
  { path: '**', component: Enfant1Component }
];
/*TODO FIN*/


@NgModule({
  declarations: [
    AppComponent,
    Enfant1Component,
    Enfant2Component,
    Enfant3Component,
    PetitEnfant1Component,
    Enfant4Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
