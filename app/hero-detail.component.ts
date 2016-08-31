import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/hero-detail.component.html'
})

export class HeroDetailComponent implements OnInit {
  @Input()
  hero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroservice: HeroService) { }

  ngOnInit():void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.heroservice.getHero(id)
        .then(hero => this.hero = hero)
    });
  }

  goBack(): void {
    window.history.back();
  }
}