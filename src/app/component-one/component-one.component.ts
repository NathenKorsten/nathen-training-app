import { Component, OnInit,  } from '@angular/core';

@Component({
  selector: 'app-component-one',
  templateUrl: './component-one.component.html',
  styleUrls: ['./component-one.component.css']
})
export class ComponentOneComponent implements OnInit {

  constructor() { }

  componentOneLabel: string = "Component 1";

  ngOnInit(): void {
  }
  // Input box text recieved from emitter/output in nested component 3
  receieveText($event:string){
    this.componentOneLabel = $event;
  }
}
