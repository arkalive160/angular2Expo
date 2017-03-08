import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-champion',
  templateUrl: './champion.component.html',
  styleUrls: ['./champion.component.css']
})
export class ChampionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  champions = [
    {
      "id":  1,
      "name": "Arka160",
      "title": "The Angular Noble",
      "class": "Magician",
      "CombatPhrase": "for the Grade!",
      "healt": 0.2,
      "mana": 150,
      "enemiesKilled": 22
    },
    {
      "id":  2,
      "name": "Neos",
      "title": "The soul stealer",
      "class": "Demon",
      "CombatPhrase": "Everybody will lose >:D",
      "healt": 1,
      "mana": 0,
      "enemiesKilled": 18
      
    }
    ];
    
    partyKilled(){
      let totalEnemiesKilled = 0;
      
      for (let champion of this.champions){
        totalEnemiesKilled += champion.enemiesKilled;
      }
      return totalEnemiesKilled;
    }

}
