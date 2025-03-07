import { MyEventDirective } from '../directives/my-event.directive';
import { MyColorDirectiveDirective } from './../directives/my-color-directive.directive';
import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-directive',
  imports: [MyColorDirectiveDirective, MyEventDirective],
  templateUrl: './custom-directive.component.html',
  styleUrl: './custom-directive.component.css'
})
export class CustomDirectiveComponent {

}
