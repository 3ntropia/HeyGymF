import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import {Client} from './client';
import {ClientService} from './services/client.service';

@Component({
  selector: 'app-client-component',
  templateUrl: './html/altaCliente.html',
  styleUrls: ['/css/style.css']
})
export class ClientComponent implements OnInit {
  @Input() client: Client;

  ngOnInit(): void {
    /*this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
      .subscribe(hero => this.hero = hero);*/
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
    /*this.heroService.update(this.hero)
      .then(() => this.goBack());*/
  }
}
