import { Component } from '@angular/core';

import { Animal } from 'src/app/Animal';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {
  animals: Animal[] = [
    {
      name: 'turca',
      type: 'dog',
      age: 10
    },

    {
      name: 'tom',
      type: 'cat',
      age: 16
    },

    {
      name: 'frida',
      type: 'dog',
      age: 25
    },

    {
      name: 'bob',
      type: 'horse',
      age: 5
    }
  ]

  animalDetails = ''

  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age}`
  }
}
