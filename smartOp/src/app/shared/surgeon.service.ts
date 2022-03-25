import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


import { Surgeon } from './surgeon.model';

@Injectable()
export class SurgeonService {
  selectedSurgeon!: Surgeon ;
  surgeons!: Surgeon[]; 
  readonly baseURL = "http://localhost:9089/posts";

  constructor( private http : HttpClient) { }

getSurgeon(){
  return this.http.get(this.baseURL);
}

}
