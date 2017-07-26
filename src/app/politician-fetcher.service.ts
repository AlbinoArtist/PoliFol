import { Injectable } from '@angular/core';
import { POLITICIAN } from './mock-politician';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PoliticianFetcherService {

  currentPolitician;

  constructor(private http: Http) {
    this.currentPolitician = POLITICIAN;
  }

  choosePolitician(politician) {
    this.currentPolitician = politician;
    console.log(politician);
  }

  //Returns all currently active politicians.
  getAllPoliticians(){
    const url = "http://data.riksdagen.se/personlista/?iid=&fnamn=&enamn=&f_ar=&kn=&parti=&valkrets=&rdlstatus=&org=&utformat=json&termlista=";
    
    return this.http.get(url)
      .map(response => response.json())
      .map(response => response.personlista.person)
      .map(response => response.sort(this.sortPoliticians))
  }

  private sortPoliticians(p1, p2) {
    if(p1.efternamn > p2.efternamn) return 1;
    if(p2.efternamn > p1.efternamn) return -1;
    if(p1.tilltalsnamn > p2.tilltalsnamn) return 1;
    if(p2.tilltalsnamn > p1.tilltalsnamn) return -1;
    return 0;
  }

}
