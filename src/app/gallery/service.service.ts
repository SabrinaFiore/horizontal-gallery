import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  err!: any;

  constructor(private httpClient: HttpClient) { }

  getImg(): Observable<any> {
    return this.httpClient.get<any[]>('https://www.datocms-assets.com/40484/1620817348-holliefgucci18032119.jpeg?auto=format')
  }
}
