import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HEROES } from 'constants/mocked-heroes';
import { MessageService } from 'service/message';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: number): Observable<Hero> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const responseHero = HEROES.find((hero) => hero.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(responseHero);
  }
}
