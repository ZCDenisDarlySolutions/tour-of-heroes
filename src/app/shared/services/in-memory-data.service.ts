import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

const HEROES: Hero[] = [
  { id: 12, name: 'Dr. Nice' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr. IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' },
];

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes: Hero[] = HEROES;
    return { heroes };
  }

  genId(heroes: Hero[]): number {
    if (!heroes.length) {
      return 11;
    }

    return Math.max(...heroes.map((hero) => hero.id)) + 1;
  }
}
