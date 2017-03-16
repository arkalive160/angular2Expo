import { Component, OnInit } from '@angular/core';
import { Champion } from '../classes/champion'
//import { CHAMPION_MOCK } from '../classes/championMock'
import {HerosDataService} from '../heros-data.service'

@Component({
  selector: 'app-champion',
  templateUrl: './champion.component.html',
  styleUrls: ['./champion.component.css']
})
export class ChampionComponent implements OnInit {
  
  maxMana = 300 ;

  champions: Champion[];
  constructor( private myHeroDataServices: HerosDataService ) { }

  ngOnInit() {
    this.champions = this.myHeroDataServices.getChampionMocks();
  }
  
    
    partyKilled(){
      let totalEnemiesKilled = 0;
      
      for (let champion of this.champions){
        totalEnemiesKilled += champion.enemiesKilled;
      }
      return totalEnemiesKilled;
    }

}
