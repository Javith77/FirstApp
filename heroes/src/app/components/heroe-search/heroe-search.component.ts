import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from './../../services/heroes.service';

@Component({
  selector: 'app-heroe-search',
  templateUrl: './heroe-search.component.html',
  styles: [
  ]
})
export class HeroeSearchComponent implements OnInit {

  heroes:Heroe[] = [];
  term:string = '';

  constructor(private activeRoute: ActivatedRoute, private _heroeService: HeroesService) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params =>{
      this.term = params['term'];
      this.heroes = this._heroeService.searchHeroe(params['term']);
      console.info(this.heroes);
    })
  }

}
