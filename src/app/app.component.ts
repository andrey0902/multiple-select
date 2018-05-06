import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public control: FormControl;
  public control2: FormControl;
  title = 'tour of heroes';
  minor = 25;
  major = 1;
  public values = [
    {
      details: 'aaa1',
      masterName: 'vala',
      name: '1111'
    },
    {
      details: 'a222',
      masterName: '222',
      name: '222'
    },
    {
      details: 'a333',
      masterName: '333',
      name: '333'
    },
    {
      details: 'a444',
      masterName: '444',
      name: '  '
    }
  ];

  public setMinor() {
    this.minor++;
  }

  public setMajor() {
    this.major++;
    this.minor = 0;
  }

  public selectOptions = [
    {
      id: 0, name: 'theme 0', value: 0, isChecked: false
    },
    {
      id: 1, name: 'theme 1', value: 1, isChecked: false
    },
    {
      id: 2, name: 'theme 2', value: 2, isChecked: false
    },
    {
      id: 3, name: 'theme 3', value: 3, isChecked: false
    },
    {
      id: 4, name: 'theme 4', value: 4, isChecked: false
    }
  ];

  public selectSettings = {
    showCheckAll: true,
    closeOnClickOutside: true,
    dynamicTitleMaxItems: 5,
  };

  ngOnInit(): void {
    this.control = new FormControl('test value', [Validators.required]);
    this.control.valueChanges
      .subscribe(value => {
        console.log('value', value);
        console.log('this.control', this.control.value);
      });
    this.control2 = new FormControl('test value', [Validators.required]);
    this.control2.valueChanges
      .subscribe(value => {
        console.log('value');
      });
  }
}
