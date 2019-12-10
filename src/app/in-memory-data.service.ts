import {InMemoryDbService} from 'angular-in-memory-web-api'
import {Hero} from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb(){
    const heroes = [
      { id: 1, name: 'Qwe Dr Nice' },
      { id: 2, name: 'Qwe Narco' },
      { id: 3, name: 'Q Bombasto' },
      { id: 4, name: 'Q Celeritas' },
      { id: 5, name: 'Q Magneta' },
      { id: 6, name: 'Q RubberMan' },
      { id: 7, name: 'Q Dynama' },
      { id: 8, name: 'Q Dr IQ' },
      { id: 9, name: 'Q Magma' },
      { id: 10, name: 'Q Tornado' }
    ];
    return {heroes};
  }
  genId(heroes:Hero[]):number{
    return heroes.length>0 ? Math.max(...heroes.map(hero => hero.id))+1:11;
  }
  constructor() { }
}
