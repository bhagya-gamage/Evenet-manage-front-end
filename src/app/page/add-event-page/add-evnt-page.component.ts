import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-add-evnt-page',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-evnt-page.component.html',
  styleUrl: './add-evnt-page.component.css'
})
export class AddEvntPageComponent {
  public event:any={
    eventName:"",
    eventCategory:"",
    venue:"",
    noOfTickets:"",
    ticketPrice:"",
    date:"",
    image:""
  };

  constructor(private http:HttpClient){}

  public addEvent(){
    this.http.post("http://localhost:8080/event/add-event",this.event).subscribe((data)=>{
      alert("Event Added!!");
    })
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
        this.event.eventImage = file;    
    }
}

eventCategories = [
  { value: 'Corporate', label: 'Corporate' },
  { value: 'Technology', label: 'Technology' },
  { value: 'Entertainment', label: 'Entertainment' },
  { value: 'Educational', label: 'Educational' },
  { value: 'Conference', label: 'Conference' },
  { value: 'Party', label: 'Party' },
];


}
