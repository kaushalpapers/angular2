//http://stackoverflow.com/questions/30501577/how-to-communicate-between-component-in-angularjs-2

import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
@Injectable()

export class PubSubService {
public _subject = new Subject<object>();
  public event = this._subject.asObservable();

  constructor() { }


   public publish(data: any) {
    this._subject.next(data);
  }
}
