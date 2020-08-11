import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable, of } from 'rxjs';

import { Log } from '../models/Log';


@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];

  private logSource = new BehaviorSubject<Log>({id: null, text: null, date: null});

  selectedLog = this.logSource.asObservable();

  constructor() {
    this.logs = [
      {
        id: '1', text: 'Generated components', date: new Date('12/12/2017 12:12:12')
      },
      {
        id: '2', text: 'Add Bootstrap', date: new Date('12/12/2017 12:12:12')
      },
      {
        id: '3', text: 'Added logs component', date: new Date('12/12/2017 12:12:12')
      },
    ]
  }

  getLogs(): Observable<Log[]> {
    return of(this.logs);
  }

  setFormLog(log: Log) {
    this.logSource.next(log);
  }

}