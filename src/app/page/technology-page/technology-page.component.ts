import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-technology-page',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './technology-page.component.html',
  styleUrl: './technology-page.component.css'
})
export class TechnologyPageComponent {
  searchTerm: string = '';
  filterType: string = 'all';
  
  public eventList:any=[];

  constructor(private http:HttpClient){
    this.loadTable();
  }

  loadTable(){
      this.http.get("http://localhost:8080/event/getAllEventsByCategory/Technology").subscribe(Technology=>{
        console.log(Technology);
        this.eventList=Technology;
      })
  }

  searchEvents() {
    // this.http.get(`http://localhost:8080/event/search-by-id/${id}`,this.eventList).subscribe(data=>{
    //   alert("Event Founded!!!");
    // })
    console.log('Searching for:', this.searchTerm);
}

}
