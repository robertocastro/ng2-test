import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-enfant1',
  templateUrl: './enfant1.component.html',
  styleUrls: ['./enfant1.component.css']
})
export class Enfant1Component implements OnInit {

  @Input() parent:string;
  //@Input() confs:any;

  confs:any[] = [
    {id:1,
      name:'test'}
  ];

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      console.log(this.confs);
      this.confs.push(
        {id:2,
          name:'test2'}
      )
    }, 2000);
  }

}
