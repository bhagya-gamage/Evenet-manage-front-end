import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2'; 


@Component({
  selector: 'app-add-customer-page',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './add-customer-page.component.html',
  styleUrl: './add-customer-page.component.css'
})
export class AddCustomerPageComponent {

    public customer:any={
      custName:"",
      custAddress:"",
      custEmail:"",
      custContact:""
    };

    constructor(private http:HttpClient){}

    public addCustomer(){
        this.http.post("http://localhost:8080/customer/add-customer",this.customer).subscribe((data)=>{
          this.alertLoginSuccessful();
        })     
    }

    alertLoginSuccessful(){
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Customer Added !!!",
        showConfirmButton: false,
        timer: 1500
      });
    }


}
