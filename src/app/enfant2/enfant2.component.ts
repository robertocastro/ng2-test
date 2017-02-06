import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-enfant2',
  templateUrl: './enfant2.component.html',
  styleUrls: ['./enfant2.component.css']
})
export class Enfant2Component implements OnInit {

  label:String;

  constructor(public route: ActivatedRoute) {
    //this.label = route.snapshot.data['label'];
  }

  ngOnInit() {
    this.label = this.route.snapshot.data['label'];
  }

}
