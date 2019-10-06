import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    EventsListComponent,
    EventsAppComponent
  ],
  providers: [],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }
