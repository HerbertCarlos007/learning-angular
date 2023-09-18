import { Component } from '@angular/core';

import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/services/list/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent {

  constructor(private listService: ListService) { }

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

  removeAnimal(animal: Animal) {
    this.animals = this.listService.remove(this.animals, animal)
  }
}
