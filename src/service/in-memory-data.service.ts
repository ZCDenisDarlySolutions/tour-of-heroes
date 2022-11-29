import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { HEROES } from 'constants/mocked-heroes';

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
