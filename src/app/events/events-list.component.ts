import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent {
  events = {
    id: 1,
    name: 'Angular connect',
    date: '09/26/2016',
    time: '10:00 am',
    price: 599.99,
    imageUrl: '/assets/images/angularconnect.png',
    location: {
      address: '2450 BZone 9',
      city: 'Soweto',
      country: 'South Africa'
    }
  };
}
