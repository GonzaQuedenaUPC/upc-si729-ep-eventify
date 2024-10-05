import {Component, OnInit} from '@angular/core';
import Event from '../../models/event.entity';
import { EventService } from '../../services/event.service';
import {EventSummaryCardComponent} from '../event-summary-card/event-summary-card.component';

@Component({
  selector: 'app-event-summary-log',
  standalone: true,
  imports: [
    EventSummaryCardComponent
  ],
  templateUrl: './event-summary-log.component.html',
  styleUrl: './event-summary-log.component.css'
})

export class EventSummaryLogComponent implements OnInit {

  protected events: Array<Event> = [];
  private _apiEvent: EventService = new EventService();

  private _buildEventFromApiResponse(response: any) {
    return response.map((event: any) => {
      return new Event({
        id: event.id,
        name: event.name,
        description: event.description,
        scheduleAt: event.scheduleAt
      });
    });
  }

  private _fetchEvents() {
    this._apiEvent.getAll().subscribe({
      next: (response: any) => {
        this.events = this._buildEventFromApiResponse(response);
      },
      error: (error: any) => {
        console.error('An error occurred:', error);
      }
    });
  }

  ngOnInit() {
    this._fetchEvents();
  }
}
