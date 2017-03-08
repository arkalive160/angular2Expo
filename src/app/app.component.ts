import { Component } from '@angular/core';

@Component({
  selector: 'app-component',
  template: `
              <h5>  {{title}}   </h5>
              <h1> {{champion.name}} </h1>
              <p> {{champion.class}} </p>
              <p> {{champion.title}} </p>
            `
  
})
export class AppComponent {
  title = 'My Hero Stats';
  
  champion = {
    "id":  1,
    "name": "Arka160",
    "title": "The Angular Noble",
    "class": "Magician"
    
  };
  
}
