import {Component, OnInit} from '@angular/core';
import {Client} from './client';
import {ClientService} from '../services/client.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  clients: Client[] = [];

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.getClients()
      .then(heroes => this.clients = heroes.slice(1, 5));
  }
}
