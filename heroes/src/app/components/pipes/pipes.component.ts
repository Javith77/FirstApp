import { Heroe, HeroesService } from './../../services/heroes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styles: [
  ]
})
export class PipesComponent implements OnInit {

  name       : string  = 'Name heroe';
  name2      : string  = 'FiRStName aNd LasTNaMe'
  name3      : string  = 'userAndPassword'
  locale     : string  = 'es';
  videoUrl   : string  = 'https://www.youtube.com/embed/UtRTTmwJcC4';
  isPassword : boolean = false;
  PI         : number  = Math.PI;
  percentage : number  = 0.234;
  salary     : number  = 7500.50;
  date       : Date    = new Date();
  heroes     : Heroe[] = [];


  promiseValue = new Promise<string>( (resolve) =>{
    setTimeout(()=>{
      resolve('loaded data!');
    }, 4500);
  });

  constructor(private _heroesService:HeroesService) { }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
  }
}
