import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchListComponent } from './components/search-list.component';

@Component({
  selector: 'app-root',
  imports: [ SearchListComponent ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ticket Finder';
}