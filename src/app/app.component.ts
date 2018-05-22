import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {catchError, distinctUntilChanged, take, takeUntil} from 'rxjs/operators';
import {interval} from 'rxjs/internal/observable/interval';
import {timer} from 'rxjs/internal/observable/timer';

import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import {Observer} from 'rxjs/Observer';
import {ActivatedRoute} from '@angular/router';
import 'rxjs-compat/add/observable/of';
import 'rxjs-compat/add/observable/from';
import 'rxjs-compat/add/observable/range';
import {takeWhile} from 'rxjs-compat/operator/takeWhile';
import {skip} from 'rxjs-compat/operator/skip';
import 'rxjs-compat/add/operator/skip';
import {pluck} from 'rxjs-compat/operator/pluck';
import 'rxjs-compat/add/operator/pluck';
import 'rxjs-compat/add/operator/filter';
import 'rxjs-compat/add/operator/first';
import 'rxjs-compat/add/operator/take';
import 'rxjs-compat/add/operator/skipWhile';

import {debounceTime} from 'rxjs/operators';
import 'rxjs-compat/add/operator/debounceTime';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public ifError = true;
  public control: FormControl;
  public control2: FormControl;
  public untill = new Subject();
  public sendValue = new Subject();
  public counter = 0;
  public simpleEvent = new Subject();
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

  constructor(private route: ActivatedRoute) {

  }

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

  public selectOptions2 = [
    'test', 'test 1', 'test 2', 'test 3'
  ];

  public selectSettings = {
    showCheckAll: true,
    closeOnClickOutside: true,
    dynamicTitleMaxItems: 5,
    isMultiple: true,
    isShoveChecked: true,
  };
  public selectSettings2 = {
    showCheckAll: true,
    closeOnClickOutside: true,
    dynamicTitleMaxItems: 5,
    isMultiple: false,
    isShoveChecked: true,
  };

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params);
    })

    this.control = new FormControl(
      // ['test 3', 'test']
      'test'
    , [Validators.required]);
    this.control.valueChanges
      .subscribe(value => {
        console.log('value', value);
        console.log('this.control', this.control.value);
      });
    this.control2 = new FormControl(   [
      {
        id: 3, name: 'theme 3', value: 3, isChecked: true
      },
      {
        id: 0, name: 'theme 0', value: 0, isChecked: true
      }
    ], [Validators.required]);
    this.control2.valueChanges
      .subscribe(value => {
        console.log('value', this.control2);
      });

/*    const time: any = timer(6000);
    const source = interval(1000).pipe(takeUntil(this.untill));
    source.subscribe(value => {
      console.log(value);
    });*/

    Observable.from('test')
      .subscribe(value => {
        console.log(value);
      });
    Observable.range(3, 5)
      .subscribe(value => console.log('range', value));

    Observable.create(observer => {
      observer.next('next 1');
      observer.next('next 2');
      observer.next('next 3');
      observer.error('maje error');
    })
      .pipe(catchError((error) => {console.log('error !!@@@@'); return Observable.of(error); }))
      .subscribe(v => {
        console.log('create', v);
      });

    Observable.from([
      {
        id: 1, name: 'test'
      },
      {
        id: 2, name: 'Vasa'
      },
      {
        id: 3, name: 'Petya', human: {hand: 2, leg: 2}
      }
    ])
      .pluck('human', 'hand')
      .filter((x: any) => x)
      .subscribe(value => console.log(value));

    this.simpleEvent.take(3)
      .subscribe(value => console.log('first', value));
    Observable.from([1, 2,3, 4, 5])
      .skipWhile(x => x < 3)
      .subscribe(val => console.log('skipWhile', val));

    this.sendValue
      .debounceTime(50)
      .subscribe(val => console.log('send value', val));
    this.sendValue.asObservable()
      .pipe(debounceTime(500))
      .subscribe(value => console.log('send value debounse', value));

    Observable.from([1,1, 2,2,3,4,4,5])
      .pipe(distinctUntilChanged())
      .subscribe(val => console.log(',distinctUntilChanged', val));
  }

  public onClick() {
    this.untill.next(true);
  }

  public onClick2() {
    this.counter++;
    this.simpleEvent.next({first: this.counter});
  }

  public send(value) {
    this.sendValue.next(value);
  }
}
