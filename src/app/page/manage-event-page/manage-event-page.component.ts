import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-event-page',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './manage-event-page.component.html',
  styleUrl: './manage-event-page.component.css'
})
export class ManageEventPageComponent {
  public eventList:any=[];
  private eventPlannerId: any = localStorage.getItem("eventplannerid"); // Retrieve ID from local storage


  constructor(private http:HttpClient){
    this.loadTable();
  }

  

  loadTable(){
      this.http.get(`http://localhost:8080/event/getAllEventsByEventPlanner/${this.eventPlannerId}`).subscribe(data=>{
        console.log(data);
        this.eventList=data;
      })
  }

  deleteEventById(id:any){
      console.log(id);
      this.http.delete(`http://localhost:8080/event/delete-by-id/${id}`).subscribe(data=>{
        alert("Event Deleted !!!");
        this.loadTable();
      })
  }

  public eventTemp:any={}

  updateEvent(event:any){
    console.log(event);
    this.eventTemp=event;
  }

  saveEvent(){
    this.http.put("http://localhost:8080/event/update-event",this.eventTemp).subscribe(data=>{
      console.log(this.eventTemp);
      alert("Event Updated!!!");
    })
  }
}
