import { Component } from '@angular/core';

@Component({
  selector: 'app-component',
  template: `
              <h1>  {{title}}   </h1>
              
              <div *ngFor="let champion of champions" >
              
                <h2> Name:  {{champion.name |uppercase }} </h2>
                <p>Class: {{champion.class}} </p>
                <p>Title: {{champion.title}} </p>
                <!--<p>HP: {{champion.healt | currency:'USD':true }}</p> -->
                <p>HP: {{champion.healt | percent }}</p>
                <p *ngIf=" champion.mana > 0">
                {{champion.name}} Shouts: {{champion.CombatPhrase}} !!!
                </p>
                
                <p *ngIf= "champion.mana === 0">
                {{champion.name}} Shouts: I need more mana :( !!
                </p>
                
              
              </div>
              
            `
  
})
export class AppComponent {
  title = 'My Hero Stats';
  
  champions = [
    {
      "id":  1,
      "name": "Arka160",
      "title": "The Angular Noble",
      "class": "Magician",
      "CombatPhrase": "for the Grade!",
      "healt": 0.2,
      "mana": 150
    },
    {
      "id":  2,
      "name": "Neos",
      "title": "The soul stealer",
      "class": "Demon",
      "CombatPhrase": "Everybody will lose >:D",
      "healt": 1,
      "mana": 0
    }
    ];
    
  
}
