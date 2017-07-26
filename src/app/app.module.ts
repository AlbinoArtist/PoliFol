import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PoliticianPageComponent } from './politician-page/politician-page.component';
import { PoliticianFetcherService } from './politician-fetcher.service';
import { PoliticiansDropdownComponent } from './politicians-dropdown/politicians-dropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PoliticianPageComponent,
    PoliticiansDropdownComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [PoliticianFetcherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
