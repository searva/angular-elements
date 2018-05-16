import {Component, Input, OnInit} from '@angular/core';
import {ReactiveComponent} from './reactive-component';

@Component({
  selector: 'app-framework-poll',
  templateUrl: './framework-poll.component.html',
  styleUrls: ['./framework-poll.component.css']
})
export class FrameworkPollComponent extends ReactiveComponent implements OnInit {

  @Input() nif: string;

  constructor() {
    super();
    this.observePropertyCurrentValue<string>('nif')
      .subscribe(x => console.log('nif is now', x));
  }

  ngOnInit() {
  }

}
