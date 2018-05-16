import {Component, Input, OnInit} from '@angular/core';
import {ReactiveComponent} from './reactive-component';

@Component({
  selector: 'app-framework-poll',
  templateUrl: './framework-poll.component.html',
  styleUrls: ['./framework-poll.component.css']
})
export class FrameworkPollComponent extends ReactiveComponent implements OnInit {

  @Input() title: string;

  angularVoteCount = 0;
  reactVoteCount = 0;
  vueVoteCount = 0;
  hasVoted = false;
  updating = false;


  constructor() {
    super();
    this.observePropertyCurrentValue<string>('title')
      .subscribe(x => console.log('title is now', x));
  }

  ngOnInit() {
  }

  vote(framework: string) {
    this.hasVoted = true;
    if (framework.indexOf('angular') > -1) {
      this.angularVoteCount++;
    } else if (framework.indexOf('react') > -1) {
      this.reactVoteCount++;
    } else {
      this.vueVoteCount++;
    }

  }

  get angularVotePercent() {
    return (this.angularVoteCount / (this.angularVoteCount + this.reactVoteCount + this.vueVoteCount)) * 100;
  }

  get reactVotePercent() {
    return (this.reactVoteCount / (this.angularVoteCount + this.reactVoteCount + this.vueVoteCount)) * 100;
  }

  get vueVotePercent() {
    return (this.vueVoteCount / (this.angularVoteCount + this.reactVoteCount + this.vueVoteCount)) * 100;
  }

}
