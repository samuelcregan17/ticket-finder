import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { EventSearchService } from '../services/event-search.service'
import { Event } from '../models/event.model';

@Component({
  selector: 'app-search-list',
  standalone: true,
  imports: [    
    CommonModule,
    FormsModule,
    RouterModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule,
    MatButtonModule,
  ],
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.css']
})
export class SearchListComponent {
  locationSearch = '';
  eventSearch = '';
  items: Event[] = [];

  constructor(private router: Router, private eventSearchService: EventSearchService) {}

  onItemClick(item: Event) {
    window.open(item.ticketUrl, '_blank');
  }

  onSearch() {
    this.eventSearchService.searchEvents(this.locationSearch, this.eventSearch)
      .subscribe({
        next: (events) => {
          this.items = events;
        },
        error: (err) => {
          console.error('Search failed', err);
        }
      });
  }
}