import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/event-thumbnail/events-list/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail/event-thumbnail/event-thumbnail.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    EventsListComponent,
    EventsAppComponent,
    EventThumbnailComponent
  ],
  providers: [],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
