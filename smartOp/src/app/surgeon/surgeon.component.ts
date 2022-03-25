import { Component, OnInit, ViewChild } from '@angular/core';
import { SurgeonService } from '../shared/surgeon.service';
import { Surgeon } from '../shared/surgeon.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-surgeon',
  templateUrl: './surgeon.component.html',
  styleUrls: ['./surgeon.component.css'],
  providers: [SurgeonService]
})
export class SurgeonComponent implements OnInit {
recheche= '';
  constructor(public surgeonService: SurgeonService) { }

  ngOnInit(): void {
  this.listSurgeon();}
 
  listSurgeon(){
    this.surgeonService.getSurgeon().subscribe((data: any) => {
      this.dataSource=new MatTableDataSource<any>(data);
      this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    })
  }

  displayedColumns: string[] = ['surgeon', 'specialty', 'anesthsiste', 'nurse1', 'nurse2', 'roomNumber', 'intervention'];
  dataSource: MatTableDataSource<any>= new MatTableDataSource<any>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  

 
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  ngAfterViewInit() {    this.dataSource.paginator = this.paginator;    this.dataSource.sort = this.sort;  }
}



