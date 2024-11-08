import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-manage-event-planner',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './manage-event-planner.component.html',
  styleUrl: './manage-event-planner.component.css'
})
export class ManageEventPlannerComponent {

  public eventplannerList:any=[];

  constructor(private http:HttpClient){
    this.loadTable();
  }

  loadTable(){
      this.http.get("http://localhost:8080/eventplanner/get-all").subscribe(data=>{
        console.log(data);
        this.eventplannerList=data;
      })
  }

  deleteEventplannerById(id:any){
      console.log(id);
      this.http.delete(`http://localhost:8080/eventplanner/delete-by-id/${id}`).subscribe(data=>{
        alert("Event Planner Deleted !!!");
        this.loadTable();
      })
  }

  public eventplannerTemp:any={}

  updateEventplanner(eventplanner:any){
    console.log(eventplanner);
    this.eventplannerTemp=eventplanner;
  }

  saveCustomer(){
    this.http.put("http://localhost:8080/eventplanner/update-eventplanner",this.eventplannerTemp).subscribe(data=>{
      console.log(this.eventplannerTemp);
      alert("Event Planner Updated!!!");
    })
  }
}
