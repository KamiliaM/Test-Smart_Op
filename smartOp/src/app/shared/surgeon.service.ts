import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Surgeon } from './surgeon.model';
import { environment } from 'src/environments/environment';

@Injectable()
export class SurgeonService {
  selectedSurgeon!: Surgeon ;
  surgeons!: Surgeon[]; 
  readonly baseURL = environment.BACKEND_URL.POSTS;
  constructor( private http : HttpClient) { }

getSurgeon(){
  return this.http.get(this.baseURL);
}

}
