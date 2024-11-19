import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-conference-page',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './conference-page.component.html',
  styleUrl: './conference-page.component.css'
})
export class ConferencePageComponent {
  searchTerm: string = '';
  filterType: string = 'all';
  
  public eventList:any=[];

  constructor(private http:HttpClient){
    this.loadTable();
  }

  loadTable(){
      this.http.get("http://localhost:8080/event/getAllEventsByCategory/Conference").subscribe(Conference=>{
        console.log(Conference);
        this.eventList=Conference;
      })
  }

  searchEvents() {
    // this.http.get(`http://localhost:8080/event/search-by-id/${id}`,this.eventList).subscribe(data=>{
    //   alert("Event Founded!!!");
    // })
    console.log('Searching for:', this.searchTerm);
}

}
