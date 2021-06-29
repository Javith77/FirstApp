import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.css']
})
export class HeroeCardComponent implements OnInit {

  @Input() heroe:any = {};
  @Input() index:number = 0;
  //@Output() selectedHeroe: EventEmitter<number>;

  constructor(private router: Router) {
   // this.selectedHeroe = new EventEmitter();
   }

  ngOnInit(): void {
  }

  getHeroe(){
    this.router.navigate(['/heroe', this.index]);
    //this.selectedHeroe.emit(this.index);
  }

}
