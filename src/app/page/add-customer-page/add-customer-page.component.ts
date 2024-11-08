import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-customer-page',
  standalone: true,
  imports: [FormsModule,CommonModule],
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
          alert("Customer Added!!");
        })     
    }



}
