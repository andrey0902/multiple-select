import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs/observable/timer';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-chaild-component',
  templateUrl: './chaild-component.component.html',
  styleUrls: ['./chaild-component.component.css']
})
export class ChaildComponentComponent implements OnInit {
  private _timer = 0;
  private canDo = true;
  constructor() { }

  ngOnInit() {
  }

  public get timer(): number {
    return this._timer;
  }

  public set timer(value) {
    this._timer += value;
  }

  public runTime() {
    timer(0, 200)
      .pipe(takeWhile(item => this.canDo))
      .subscribe(item => this.timer = 1);
  }

  public canStop() {
    this.canDo = false;
  }

  public reset() {
    this._timer = 0;
    this.canDo = true;
  }

}
