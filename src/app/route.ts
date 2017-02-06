import {Routes} from "@angular/router";

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
  { path: '**', component: Enfant1Component }
];


