import { Component } from '@angular/core';
import {stringDistance} from "codelyzer/util/utils";
import {setTimeout} from "timers";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  parent:string = 'infoParent';

  confsParent:any[] = [
    {id:1,
    name:'test'}
  ];


  ngOnInit() {
  /*  setTimeout(() => {
      console.log(this.confs);
      this.confs.push(
        {id:2,
          name:'test2'}
      )
    }, 2000);*/
  }




}
