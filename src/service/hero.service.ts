import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';

import { MessageService } from './message.service';

const HEROES_URL = 'api/heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(HEROES_URL).pipe(
      tap((_) => this.log('Fetched heroes')),
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
  }

  getHero(id: number): Observable<Hero> {
    const URL = `${HEROES_URL}/${id}`;

    return this.http.get<Hero>(URL).pipe(
      tap((_) => this.log(`Fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  updateHero(hero: Hero): Observable<any> {
    return this.http.put(HEROES_URL, hero, this.httpOptions).pipe(
      tap((_) => this.log(`Updated hero id=${hero.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(HEROES_URL, hero, this.httpOptions).pipe(
      tap((newHero: Hero) => this.log(`Added hero with id=${newHero.id}`)),
      catchError(this.handleError<Hero>('addHero'))
    );
  }

  deleteHero(id: number): Observable<Hero> {
    const URL = `${HEROES_URL}/${id}`;

    return this.http.delete<Hero>(URL, this.httpOptions).pipe(
      tap((_) => this.log(`Deleted hero id=${id}`)),
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      return of([]);
    }
    const URL = `${HEROES_URL}/?name=${term}`;
    return this.http.get<Hero[]>(URL).pipe(
      tap((hero) =>
        this.log(hero.length ? 'found' : 'no' + `heroes matching "${term}"`)
      ),
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }
}
