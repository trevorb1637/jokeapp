import { Component, OnInit } from '@angular/core';
import { GetjokesService } from '../getjokes.service';
import { Joke } from '../joke';

@Component({
  selector: 'app-randomjoke',
  templateUrl: './randomjoke.component.html',
  styleUrls: ['./randomjoke.component.css']
})
export class RandomjokeComponent implements OnInit {

  constructor(private _service: GetjokesService) { }
randomjoke!: Joke;
  ngOnInit(): void {
    this._service.getRandomJoke().subscribe(data => {
      this.randomjoke = data;
    })
  }

}
