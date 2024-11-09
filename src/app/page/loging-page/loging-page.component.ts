import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-loging-page',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './loging-page.component.html',
  styleUrl: './loging-page.component.css'
})

export class LogingPageComponent {
  loginData = {
    email: '',
    password: '',
    rememberMe: false
  };
  
  showPassword = false;

  public eventplannerList:any=[];


  constructor(private http: HttpClient) {
    this.loadEventPlanners();
  }

  loadEventPlanners() {
    this.http.get("http://localhost:8080/eventplanner/get-all").subscribe(data => {
      console.log(data);
      this.eventplannerList = data;
    });
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    console.log('Login submitted:', this.loginData);
    
    const foundPlanner = this.eventplannerList.find((eventplanner: any) => 
      eventplanner.email === this.loginData.email && eventplanner.password === this.loginData.password
    );

    if (foundPlanner) {
      console.log('Login successful:', foundPlanner);
    } else {
      console.error('Login failed: Invalid credentials');
      alert('Invalid email or password. Please try again.');
    }
  }
}
