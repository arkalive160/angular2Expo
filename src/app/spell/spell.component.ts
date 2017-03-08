import { Component, OnInit, Input } from '@angular/core';
import { Spell } from '../classes/spell';
import { SPELL_MOCK } from '../classes/spellMock';
import { Champion } from '../classes/champion'

@Component({
  selector: 'app-spell',
  templateUrl: './spell.component.html',
  styleUrls: ['./spell.component.css']
})
export class SpellComponent implements OnInit {
  
  @Input() championRef: Champion;
  
  spells: Spell[];

  constructor() { }

  ngOnInit() {
    this.spells = SPELL_MOCK;
  }
  
  decreaseMana(spellCost) {
    if( (this.championRef.mana - spellCost) < 0)
      alert("recharge your mana");
    else
      this.championRef.mana -= spellCost;
  }

}
