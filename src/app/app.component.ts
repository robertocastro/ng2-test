import { Component } from '@angular/core';


import {stringDistance} from "codelyzer/util/utils";
import {setTimeout} from "timers";
import {conferenceService} from "./services/conferencesService";
import {NavigationExtras, Router} from "@angular/router";

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
    name:'testAppcomponent0'}
  ];


  constructor(public confService: conferenceService, public router:Router) { }

  ngOnInit() {

    this.confService.setConference(
      {  id:3,
        name:'testAppcomponent3'
      }
    )


    setTimeout(() => {
      console.log(this.confsParent);
      this.confService.setConference(
        {  id:5,
          name:'testAppcomponent5'
        }
      )
    }, 2000);




    setTimeout(() => {
      console.log(this.confsParent);
      this.confsParent.push(
        {id:4,
          name:'testAppcomponent4'}
      )
    }, 2000);
  }

  public onTap() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "id": "5",
        "name": "testAppcomponent5"
      }
    };
    this.router.navigate(["page2"], navigationExtras);
  }



}
