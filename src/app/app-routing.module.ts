import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { Enfant1Component } from './enfant1/enfant1.component';
import { Enfant2Component } from './enfant2/enfant2.component';
import { Enfant3Component } from './enfant3/enfant3.component';
import { PetitEnfant1Component } from './petit-enfant1/petit-enfant1.component';
import { Enfant4Component } from './enfant4/enfant4.component';
import { Enfant5Component } from './enfant5/enfant5.component';


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
  { path: 'enfant5', component: Enfant5Component },
  { path: '**', component: Enfant1Component }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
