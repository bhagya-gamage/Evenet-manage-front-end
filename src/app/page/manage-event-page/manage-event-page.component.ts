import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-manage-event-page',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './manage-event-page.component.html',
  styleUrl: './manage-event-page.component.css'
})
export class ManageEventPageComponent {
  public eventList:any=[];
  private eventPlannerId: any = localStorage.getItem("eventplannerid"); 


  constructor(private http:HttpClient){
    this.loadTable();
  }

  

  loadTable(){
      this.http.get(`http://localhost:8080/event/getAllEventsByEventPlanner/${this.eventPlannerId}`).subscribe(data=>{
        console.log(data);
        this.eventList=data;
        console.log(this.eventPlannerId);
        
      })
  }

  deleteEventById(id:any){
      console.log(id);
      this.http.delete(`http://localhost:8080/event/delete-by-id/${id}`).subscribe(data=>{
        this.alertDelete();
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
      this.alertLoginSuccessful();
    })
  }

  alertLoginSuccessful(){
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Event Updated !!!",
      showConfirmButton: false,
      timer: 1500
    });
  }

  alertDelete(){
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }
  
}
