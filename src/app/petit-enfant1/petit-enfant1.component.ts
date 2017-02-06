import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-petit-enfant1',
  templateUrl: './petit-enfant1.component.html',
  styleUrls: ['./petit-enfant1.component.css']
})
export class PetitEnfant1Component implements OnInit {


  //constructor(public route: ActivatedRoute,public test: RouterState) { }
  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
    console.log('-->');
    console.log(this.route.parent);
    console.log('<-->');
   // console.log(this.test);
    console.log('=====');
  }

}
