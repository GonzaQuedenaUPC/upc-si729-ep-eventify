import { Injectable } from '@angular/core';
import Event from '../models/event.entity';
import { BaseService } from '../../shared/service/base.service';

@Injectable({
  providedIn: 'root'
})

export class EventService extends BaseService<Event>{

  constructor() {
    super();
    this.resourceEndpoint = '/events';
  }
}
