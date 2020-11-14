import { Component, OnInit } from '@angular/core';
import { GetjokesService } from './../getjokes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _service: GetjokesService) { }

  ngOnInit(): void {
  }

  randomJoke() {
    window.location.href = "/randomjoke";
  }

  tenJokes() {
    window.location.href = "/tenjokes";
  }
}
