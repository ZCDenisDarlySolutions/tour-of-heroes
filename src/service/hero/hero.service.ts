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
}
