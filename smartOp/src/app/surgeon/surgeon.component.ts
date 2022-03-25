import { Component, OnInit } from '@angular/core';
import { SurgeonService } from '../shared/surgeon.service';
import { Surgeon } from '../shared/surgeon.model';

@Component({
  selector: 'app-surgeon',
  templateUrl: './surgeon.component.html',
  styleUrls: ['./surgeon.component.css'],
  providers: [SurgeonService]
})
export class SurgeonComponent implements OnInit {

  constructor(public surgeonService: SurgeonService) { }

  ngOnInit(): void {


  }
 
  listSurgeon(){
    this.surgeonService.getSurgeon();
  }


}
