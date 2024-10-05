import {Component, Input} from '@angular/core';
import Event from '../../models/event.entity'

import {MatCard, MatCardContent, MatCardFooter} from '@angular/material/card';
import { MatCardTitle } from '@angular/material/card';
import { MatCardHeader } from '@angular/material/card';

@Component({
  selector: 'app-event-summary-card',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatCardHeader,
    MatCardContent,
    MatCardFooter
  ],
  templateUrl: './event-summary-card.component.html',
  styleUrl: './event-summary-card.component.css'
})

export class EventSummaryCardComponent {
  @Input()
  event!: Event;
  @Input()
  checkedInAt!: number;
  @Input()
  averageRating!: string;
}
