import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterLink } from '@angular/router';


@Component({
  selector: 'app-add-eventplanner-page',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './add-eventplanner-page.component.html',
  styleUrl: './add-eventplanner-page.component.css'
})
export class AddEventplannerPageComponent {
  public eventplanner:any={
    name:"",
    address:"",
    email:"",
    specialization:"",
    experience:"",
    contact:""
  };

  constructor(private http:HttpClient){}

  public addEventplanner(){
    this.http.post("http://localhost:8080/eventplanner/add-eventplanner",this.eventplanner).subscribe((data)=>{
      alert("Event Planner Added!!");
    })
    
}


  searchTerm: string = '';

  searchEvents() {
      // Implement your search logic here
      this.http.get("http://localhost:8080/event/search-by-id/",this.eventplanner).subscribe(data=>{
        alert("Event Founded!!!");
      })
      console.log('Searching for:', this.searchTerm);
  }


}
