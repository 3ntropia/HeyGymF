import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Client} from '../component/client';
import 'rxjs/add/operator/toPromise';
import {Headers} from '@angular/http';

@Injectable()
export class ClientService {
  private clientsUrl = 'api/clients';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});
  /*getHeroesOld(): Promise <Hero[]> {
   return  Promise.resolve(HEROES);
   } // stub*/

  constructor(private http: Http) { }

  getClients(): Promise<Client[]> {
    return this.http.get(this.clientsUrl)
      .toPromise()
      .then(response => response.json().data as Client[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  getHeroesSlowly(): Promise<Client[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getClients()), 2000);
    });
  }
  getHeroOld(id: number): Promise<Client> {
    return this.getClients()
      .then(heroes => heroes.find(hero => hero.id === id));
  }
  getHero(id: number): Promise<Client> {
    const url = `${this.clientsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Client)
      .catch(this.handleError);
  }

  update(hero: Client): Promise<Client> {
    const url = `${this.clientsUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  create(name: string): Promise<Client> {
    return this.http
      .post(this.clientsUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Client)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.clientsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }
}
