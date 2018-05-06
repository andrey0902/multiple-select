import { Component, OnInit } from '@angular/core';
import { HeroService } from '../shared/hero.service';
import { Hero } from '../shared/hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public heroes: Hero[] = [];
  constructor(private heroesService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }
    public getHeroes(): void {
      this.heroesService.getHeroes()
        .subscribe((heroes: Hero[]) => this.heroes = heroes);
    }

}
