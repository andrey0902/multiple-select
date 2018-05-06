import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../shared/hero';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../shared/hero.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
  @Input('hero') public hero: Hero;

  constructor(
    private activateR: ActivatedRoute,
    private location: Location,
    private heroService: HeroService
  ) {
  }

  ngOnInit() {
    this.getHero();
  }

  public getHero() {
    let id: number;
    this.activateR.params.subscribe(value => {
      id = +value.id;
      this.heroService.getHero(id)
        .subscribe(result => {
          this.hero = result;
        });
    });
  }

  public goBack(): void {
    this.location.back();
  }

  public save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
}
