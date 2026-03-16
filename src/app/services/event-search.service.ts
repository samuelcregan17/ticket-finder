import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { Event } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventSearchService {
  private apiKey = '6bzENdYHS4F0ex692fiIlx2rrSoVGv8o';
  private baseUrl = 'https://app.ticketmaster.com/discovery/v2';

  constructor(private http: HttpClient) {}

  searchEvents(location: string, keyword: string): Observable<Event[]> {
    return this.http.get<any>(`${this.baseUrl}/events.json`, {
      params: {
        apikey: this.apiKey,
        keyword: keyword,
        city: location
      }
    }).pipe(
      map(response => this.parseEvents(response))
    );
  }

  private parseEvents(response: any): Event[] {
    const events = response?._embedded?.events ?? [];
    return events.map((event: any) => this.parseEvent(event));
  }

  private parseEvent(event: any): Event {
    const venue = event?._embedded?.venues?.[0];
    return {
      id:         event.id,
      name:       event.name,
      location:   `${venue?.city?.name}, ${venue?.state?.stateCode}`,
      venue:      venue?.name,
      date:       event?.dates?.start?.localDate,
      time:       event?.dates?.start?.localTime,
      imageUrl:   this.getBestImage(event.images),
      ticketUrl:  event.url,
      icon:       'ticketmaster_icon.png'
    };
  }

  private getBestImage(images: any[]): string {
    // prefer 16_9 ratio at a reasonable size
    const preferred = images?.find(img => img.ratio === '16_9' && img.width === 1136);
    return preferred?.url ?? images?.[0]?.url ?? '';
  }

  getEventDetails(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/events/${id}.json`, {
      params: { apikey: this.apiKey }
    });
  }
}