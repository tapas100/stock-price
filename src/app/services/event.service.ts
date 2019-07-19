import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpService) { }

  getPrices() {
    return this.http.get('Price')
  }

  updatePriceById(id,element) {
    return this.http.put('Price/' + id, {
      fields: element
    })
  }

  createPrice(data){
    return this.http.post('Price',{
      fields:data
    })
  }

}
