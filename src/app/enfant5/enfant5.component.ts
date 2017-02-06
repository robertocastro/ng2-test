import { Component, OnInit } from '@angular/core';
import {conferenceService} from "../services/conferencesService";

@Component({
  selector: 'app-enfant5',
  templateUrl: './enfant5.component.html',
  styleUrls: ['./enfant5.component.css']
})
export class Enfant5Component implements OnInit {

  conferences:any;
  constructor(public confService: conferenceService) { }

  ngOnInit() {
    this.confService.conference$.subscribe( observable=> this.conferences = observable);
  }

}
