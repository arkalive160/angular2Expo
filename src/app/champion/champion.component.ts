import { Component, OnInit } from '@angular/core';
import { Champion } from '../classes/champion'
import { CHAMPION_MOCK } from '../classes/championMock'

@Component({
  selector: 'app-champion',
  templateUrl: './champion.component.html',
  styleUrls: ['./champion.component.css']
})
export class ChampionComponent implements OnInit {

  champions: Champion[];
  constructor() { }

  ngOnInit() {
    this.champions = CHAMPION_MOCK;
  }
  
    
    partyKilled(){
      let totalEnemiesKilled = 0;
      
      for (let champion of this.champions){
        totalEnemiesKilled += champion.enemiesKilled;
      }
      return totalEnemiesKilled;
    }

}
