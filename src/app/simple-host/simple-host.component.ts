import { Component, OnInit, ViewChild } from '@angular/core';
import { HostDirective } from '../shared/host.directive';

@Component({
  selector: 'app-simple-host',
  templateUrl: './simple-host.component.html',
  styleUrls: ['./simple-host.component.css']
})
export class SimpleHostComponent implements OnInit {
  @ViewChild(HostDirective) public addDirective: HostDirective;
  constructor() { }

  ngOnInit() {
  }

  public openModal() {
    this.addDirective.data = {title: 'some title from component'};
    this.addDirective.insert();
    console.log(this.addDirective);
  }

  public closedModal() {
    this.addDirective.clear();
  }
}
