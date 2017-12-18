import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import {Client} from './client';
import {ClientService} from '../services/client.service';

@Component({
  selector: 'app-client-component',
  templateUrl: '../resources/cliente.html',
  styleUrls: ['../resources/css/style.css'],
  providers: [ClientService]
})
export class ClientComponent implements OnInit {
  @Input() client: Client;
  selectedClient: Client;
  clients: Client[];

  ngOnInit(): void {
    this.getClients();
  }
  onSelect(client: Client): void {
    this.selectedClient = client;
  }
  constructor(private clientService: ClientService) { }

  getClients(): void {
    this.clientService.getClients().then(clients => this.clients = clients);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.clientService.create(name)
      .then(hero => {
        this.clients.push(hero);
        this.selectedClient = null;
      });
  }

  delete(client: Client): void {
    this.clientService
      .delete(client.id)
      .then(() => {
        this.clients = this.clients.filter(h => h !== client);
        if (this.selectedClient === client) { this.selectedClient = null; }
      });
  }
}
