import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-version-chaild',
  templateUrl: './version-chaild.component.html',
  styleUrls: ['./version-chaild.component.css']
})
export class VersionChaildComponent implements OnInit, OnChanges {
  @Input() public minor: number;
  @Input() public major: number;
  public changeLog: string[] = [];
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: {[propKey: string]: any}) {
    console.log('changes', changes);
    const log: string[] = [];
    for (const propName in changes) {
      const changedProp = changes[propName];
      const to = JSON.stringify(changedProp.currentValue);
      if (changedProp.isFirstChange()) {
        log.push(`Initial value of ${propName} set to ${to}`);
      } else {
        const from = JSON.stringify(changedProp.previousValue);
        log.push(`${propName} changed from ${from} to ${to}`);
      }
    }
    this.changeLog.push(log.join(', '));
  }
}

