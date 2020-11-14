import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Joke } from './joke';

@Injectable({
  providedIn: 'root'
})
export class GetjokesService {

  constructor(private httpclient: HttpClient ) { }

  getRandomJoke() {
    return this.httpclient.get<Joke>('https://official-joke-api.appspot.com/random_joke');
  }

  getTenRandomJokes() {
    return this.httpclient.get<Joke[]>('https://official-joke-api.appspot.com/random_ten');
  }
}
