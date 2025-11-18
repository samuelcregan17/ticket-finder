import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'homepage',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class Homepage {
  title = 'Ticket Finder';
}