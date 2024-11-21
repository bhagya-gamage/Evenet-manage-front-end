import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-admin-manage-page',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './admin-manage-page.component.html',
  styleUrl: './admin-manage-page.component.css'
})
export class AdminManagePageComponent {

}
