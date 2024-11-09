import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-add-eventplanner-page',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-eventplanner-page.component.html',
  styleUrl: './add-eventplanner-page.component.css'
})
export class AddEventplannerPageComponent {
  public eventplanner:any={
    name:"",
    address:"",
    email:"",
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
      console.log('Searching for:', this.searchTerm);
  }


}
