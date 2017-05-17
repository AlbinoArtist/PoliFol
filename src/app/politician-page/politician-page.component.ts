import { Component, OnInit } from '@angular/core';
import { PoliticianFetcherService } from '../politician-fetcher.service';

@Component({
  selector: 'app-politician-page',
  templateUrl: './politician-page.component.html',
  styleUrls: ['./politician-page.component.css']
})
export class PoliticianPageComponent implements OnInit {
  Politician = {};
  constructor(private politicianFetcherService: PoliticianFetcherService) { 
  }

  ngOnInit() {
    this.Politician = this.politicianFetcherService.getPolitician();
  }
  

}
