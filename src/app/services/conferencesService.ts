import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

export class conferenceService {
  private conferenceSource = new BehaviorSubject<any>([]);

  conference$ = this.conferenceSource.asObservable();

  setConference(conference: any){
    this.conferenceSource.next(conference);
  }



}
