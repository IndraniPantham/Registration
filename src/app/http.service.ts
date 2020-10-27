import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders ,HttpParams} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  public httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
      })
  };

params = new HttpParams();


  url = "http://18.212.242.209/getVehicleDetails";
  constructor(private http: HttpClient) { }

  getHttpData(reg2,reg1){
    this.params = this.params.append('reg2', reg2);
    this.params = this.params.append('reg1', reg1);
      return this.http.get(this.url,{params: this.params});
  }

}
