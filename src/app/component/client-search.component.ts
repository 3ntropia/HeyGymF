import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import {Client} from './client';
import {ClientSearchService} from '../services/client-search.service';

@Component({
  selector: 'app-client-search',
  templateUrl: './client-search.component.html',
  providers: [ClientSearchService]
})
export class ClientSearchComponent implements OnInit {
  clients: Observable<Client[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private clientSearchService: ClientSearchService,
    private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.clients = this.searchTerms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time the term changes
        // return the http search observable
        ? this.clientSearchService.search(term)
        // or the observable of empty heroes if there was no search term
        : Observable.of<Client[]>([]))
      .catch(error => {
        // TODO: add real error handling
        console.log(error);
        return Observable.of<Client[]>([]);
      });
  }

  gotoDetail(client: Client): void {
    const link = ['/detail', client.id];
    this.router.navigate(link);
  }
}
