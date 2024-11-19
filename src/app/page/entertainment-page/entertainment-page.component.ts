import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-entertainment-page',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './entertainment-page.component.html',
  styleUrl: './entertainment-page.component.css'
})
export class EntertainmentPageComponent {

  searchTerm: string = '';
  filterType: string = 'all';
  
  public eventList:any=[];

  constructor(private http:HttpClient){
    this.loadTable();
  }

  loadTable(){
      this.http.get("http://localhost:8080/event/getAllEventsByCategory/Entertainment").subscribe(Entertainment=>{
        console.log(Entertainment);
        this.eventList=Entertainment;
      })
  }

  searchEvents() {
    // this.http.get(`http://localhost:8080/event/search-by-id/${id}`,this.eventList).subscribe(data=>{
    //   alert("Event Founded!!!");
    // })
    console.log('Searching for:', this.searchTerm);
}

bookEvent() {
  // Implement your booking logic here
  alert('Booking functionality to be implemented!');
}

}


