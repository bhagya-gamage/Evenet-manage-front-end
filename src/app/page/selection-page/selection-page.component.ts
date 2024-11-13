import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-selection-page',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './selection-page.component.html',
  styleUrl: './selection-page.component.css'
})
export class SelectionPageComponent {

}
