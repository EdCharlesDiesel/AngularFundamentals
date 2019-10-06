import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  // tslint:disable-next-line: component-selector
  selector: "event-thumbnail",
  templateUrl: "./event-thumbnail.component.html",
  styleUrls: ["./event-thumbnail.component.css"]
})
export class EventThumbnailComponent {
  @Input() events: any;
  @Output() eventClick = new EventEmitter();
  handleclickMe() {
    this.eventClick.emit(this.events.name);
  }
}
