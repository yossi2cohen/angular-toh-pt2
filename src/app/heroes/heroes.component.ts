import { Component, OnInit } from '@angular/core';
//import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  
  heros = HEROES;
  // shero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // };
  constructor() {}

  ngOnInit() {}
}