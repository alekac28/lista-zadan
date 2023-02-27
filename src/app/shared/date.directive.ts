import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appDate]'
})
export class DateDirective {

  constructor() { }

  @HostListener('mouseenter')
  mouseenter(eventDate: Event){
    console.log('mouseenter');
  }

  @HostListener('mouseleave')
  mouseleave(eventDate: Event){
    console.log('mouseleave');
  }

}
