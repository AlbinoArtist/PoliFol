import { Component } from '@angular/core';
import { PoliticianFetcherService } from './politician-fetcher.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PoliticianFetcherService]
})
export class AppComponent {
  title = 'app works!';
  test = 'test';
  politicians = {};

  constructor(private fetcher: PoliticianFetcherService) {  }

  ngOnInit() {
    this.fetcher.getAllPoliticians()
      .subscribe( data => this.politicians = data);
  }
}
