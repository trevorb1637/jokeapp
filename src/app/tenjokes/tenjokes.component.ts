import { Component, OnInit } from '@angular/core';
import { GetjokesService } from '../getjokes.service';
import { Joke } from '../joke';

@Component({
  selector: 'app-tenjokes',
  templateUrl: './tenjokes.component.html',
  styleUrls: ['./tenjokes.component.css']
})
export class TenjokesComponent implements OnInit {

  tenjokes!: Joke[];

  constructor(private _service: GetjokesService) { }

  ngOnInit(): void {
    this._service.getTenRandomJokes().subscribe(data => {
      this.tenjokes = data;
    })
  }

}
