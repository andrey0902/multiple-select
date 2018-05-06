import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-chaild',
  templateUrl: './chaild.component.html',
  styleUrls: ['./chaild.component.css']
})
export class ChaildComponent implements OnInit {
  public _name: string;
  @Input() details: string;
  @Input() masterName: string;
  @Input() public set name(value: string) {
    this._name = value && value.trim() ? value.trim() : 'no the name';
  }
  constructor() { }

  public get name() {
    return this._name;
  }

  ngOnInit() {
  }

}
