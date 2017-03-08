import { Injectable } from '@angular/core';

import { CHAMPION_MOCK } from './classes/championMock'
import { SPELL_MOCK } from './classes/spellMock';

@Injectable()
export class HerosDataService {

  constructor() { }
  
  getChampionMocks(){
      return CHAMPION_MOCK;
  }
  
  getSpellMocks() {
      return SPELL_MOCK;
  }

}
