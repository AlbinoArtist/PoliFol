import { Injectable } from '@angular/core';
import { POLITICIAN } from './mock-politician';

@Injectable()
export class PoliticianFetcherService {

  constructor() { }
  //Returns a specific politicians based on their intressent_id.
  getPolitician(){
    //Currently return mock data from the file './mock-politician'
    return POLITICIAN;

  }
  //Returns all currently active politicians.
  getAllPoliticians(){

  }

}
