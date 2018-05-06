import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { HeroService } from '../shared/hero.service';
import { Hero } from '../shared/hero';

@Component({
  selector: 'app-search-hero',
  templateUrl: './search-hero.component.html',
  styleUrls: ['./search-hero.component.css']
})
export class SearchHeroComponent implements OnInit {
  public heroes$: Hero[] = [];
  private subject = new Subject<string>();
  constructor(private service: HeroService) { }

  ngOnInit() {
    this.sendSearch();
  }

  public search(value: any) {
    this.subject.next(value);
  }

  public sendSearch() {
    this.subject
      .pipe(debounceTime(500),
        distinctUntilChanged(),
      switchMap((value: string) => this.service.searchHeroes(value))
  )
      .subscribe(( result: Hero[]) => {
     this.heroes$ = result;
    });
  }

}
