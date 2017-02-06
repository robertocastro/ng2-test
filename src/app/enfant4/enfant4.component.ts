import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-enfant4',
  templateUrl: './enfant4.component.html',
  styleUrls: ['./enfant4.component.css']
})
export class Enfant4Component implements OnInit {

  test:any;
  constructor(public params: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.params);
    /*
    this.test = this.route.snapshot.params['confs'];
    console.log(this.route.snapshot.params['confs']);
    console.log(typeof this.route.snapshot.params['confs']);
    */
  }

}
