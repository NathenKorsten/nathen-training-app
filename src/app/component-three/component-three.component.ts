import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  NgModule,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from '../app.component';
FormsModule;

@Component({
  selector: 'app-component-three',
  templateUrl: './component-three.component.html',
  styleUrls: ['./component-three.component.css'],
})
export class ComponentThreeComponent implements OnInit {
  textBoxContent: string = '';
  textBoxIsEmpty: string = '';
  constructor() {}

  ngOnInit(): void {}

  // EventEmitter used for child to parent data sharing
  @Output() messageEvent = new EventEmitter<string>();

  getInputValue(textValue: string) {
    this.textBoxContent = textValue;
  }

  sendMessage() {
    this.messageEvent.emit(this.textBoxContent);
  }
}
