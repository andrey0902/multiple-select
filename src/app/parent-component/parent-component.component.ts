import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ChaildComponentComponent } from '../chaild-component/chaild-component.component';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit, AfterViewInit {
  @ViewChild('timer') public timer: ChaildComponentComponent;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {

  }

  public runTimer() {
    this.timer.runTime();
  }

  public stopTimer() {
    this.timer.canStop();
  }

  public resetTimer() {
    this.timer.reset();
  }

}
