import { Injectable } from '@angular/core';

import { Log } from '../models/Log';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];

  constructor() {
    this.logs = [
      {
        id: '1', text: 'Generated components', date: new Date('12/12/2017 12:12:12')
      },
      {
        id: '1', text: 'Add Bootstrap', date: new Date('12/12/2017 12:12:12')
      },
      {
        id: '1', text: 'Added logs component', date: new Date('12/12/2017 12:12:12')
      },
    ]
  }

  getLogs(): Log[] {
    return this.logs;
  }

}