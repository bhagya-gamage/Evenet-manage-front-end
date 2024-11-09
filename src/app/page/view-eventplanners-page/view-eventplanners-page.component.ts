import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-view-eventplanners-page',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './view-eventplanners-page.component.html',
  styleUrl: './view-eventplanners-page.component.css'
})
export class ViewEventplannersPageComponent {
  searchTerm: string = '';
  filterType: string = 'all';
  
  public eventplannerList:any=[];

  constructor(private http:HttpClient){
    this.loadTable();
  }

  loadTable(){
      this.http.get("http://localhost:8080/eventplanner/get-all").subscribe(data=>{
        console.log(data);
        this.eventplannerList=data;
      })
  }

  searchEventplanners() {
    // Implement your search logic here
    console.log('Searching for:', this.searchTerm);
}


}
