import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-two',
  templateUrl: './component-two.component.html',
  styleUrls: ['./component-two.component.css'],
})
export class ComponentTwoComponent implements OnInit {
  componentTwoLabel: string = 'Component 2';
  constructor() {}

  ngOnInit(): void {}
  // Input box text recieved from emitter/output in nested component 3
  receieveText($event: string) {
    this.componentTwoLabel = $event;
  }
}
