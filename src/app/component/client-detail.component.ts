import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import {Client} from './client';
import {ClientService} from '../services/client.service';

@Component({
  selector: 'client-detail',
  templateUrl: './client-detail.component.html'
})
export class ClientDetailComponent implements OnInit {
  @Input() client: Client;

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.clientService.getClient(+params.get('id')))
      .subscribe(client => this.client = client);
  }

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  goBack(): void {
    this.location.back();
  }
  save(): void {
    this.clientService.update(this.client)
      .then(() => this.goBack());
  }
}
