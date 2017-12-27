import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Client} from '../component/client';

@Injectable()
export class ClientSearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<Client[]> {
    return this.http
      .get(`api/heroes/?name=${term}`)
      .map(response => response.json().data as Client[]);
  }
}
