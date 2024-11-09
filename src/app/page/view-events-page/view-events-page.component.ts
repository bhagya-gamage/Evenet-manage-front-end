import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-view-events-page',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './view-events-page.component.html',
  styleUrl: './view-events-page.component.css'
})
export class ViewEventsPageComponent {
  searchTerm: string = '';
  filterType: string = 'all';
  
  public eventList:any=[];

  constructor(private http:HttpClient){
    this.loadTable();
  }

  loadTable(){
      this.http.get("http://localhost:8080/event/get-all").subscribe(data=>{
        console.log(data);
        this.eventList=data;
      })
  }

  searchEvents() {
      // Implement your search logic here
      console.log('Searching for:', this.searchTerm);
  }
}
