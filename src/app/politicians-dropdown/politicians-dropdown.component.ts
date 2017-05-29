import { Component, OnInit } from '@angular/core';
import { PoliticianFetcherService } from '../politician-fetcher.service';

@Component({
  selector: 'app-politicians-dropdown',
  templateUrl: './politicians-dropdown.component.html',
  styleUrls: ['./politicians-dropdown.component.scss'],
  providers: [PoliticianFetcherService]
})
export class PoliticiansDropdownComponent implements OnInit {

  politicians = {};

  constructor(private fetcher: PoliticianFetcherService) {  }

  ngOnInit() {
    this.fetcher.getAllPoliticians()
      .subscribe( data => this.politicians = data);
  }

}
