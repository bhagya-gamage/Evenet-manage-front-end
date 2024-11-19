import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-educational-page',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './educational-page.component.html',
  styleUrl: './educational-page.component.css'
})
export class EducationalPageComponent {
  searchTerm: string = '';
  filterType: string = 'all';
  
  public eventList:any=[];

  constructor(private http:HttpClient){
    this.loadTable();
  }

  loadTable(){
      this.http.get("http://localhost:8080/event/getAllEventsByCategory/Educational").subscribe(Educational=>{
        console.log(Educational);
        this.eventList=Educational;
      })
  }

  searchEvents() {
    // this.http.get(`http://localhost:8080/event/search-by-id/${id}`,this.eventList).subscribe(data=>{
    //   alert("Event Founded!!!");
    // })
    console.log('Searching for:', this.searchTerm);
}

}
