import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class DataService {

  priceList: Subject<any> = new Subject();
  priceList$: Observable<any> = this.priceList.asObservable()
  constructor() { }

  handlepriceList() {
    this.priceList.next(null)
  }

}
