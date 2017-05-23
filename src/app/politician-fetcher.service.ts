import { Injectable } from '@angular/core';
import { POLITICIAN } from './mock-politician';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PoliticianFetcherService {

  constructor(private http: Http) { }

  //Returns a specific politicians based on their intressent_id.
  getPolitician(){
    //Currently return mock data from the file './mock-politician'
    return POLITICIAN;
  }

  //Returns all currently active politicians.
  getAllPoliticians(){
    const url = "http://data.riksdagen.se/personlista/?iid=&fnamn=&enamn=&f_ar=&kn=&parti=&valkrets=&rdlstatus=&org=&utformat=json&termlista=";
    
    return this.http.get(url)
      .map(response => response.json())
      .map(response => response.personlista.person);
  }

}
