import {Component, inject, OnInit} from '@angular/core';
import { Title } from '@angular/platform-browser';

import { EventSummaryLogComponent } from '../../../registration/components/event-summary-log/event-summary-log.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    EventSummaryLogComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {
  private _title: Title = inject(Title);

  ngOnInit() {
    this._title.setTitle('Home');
  }
}
