import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-enfant3',
  templateUrl: './enfant3.component.html',
  styleUrls: ['./enfant3.component.css']
})
export class Enfant3Component implements OnInit {

  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot.params);
  }

}
