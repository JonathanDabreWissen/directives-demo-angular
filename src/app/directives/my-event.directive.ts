import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[myEvent]'
})
export class MyEventDirective {

  constructor() { 

  }

  @HostListener('click')
  abc(){
    console.log("You have clicked on this tag content");
  }

  @HostListener('mouseenter')
  xyz(){
    console.log("You have entered on this tag content");
  }

  @HostListener('mouseleave')
  atoz(){
    console.log("You have left this tag content");
  }
}
