import { Component, OnInit } from '@angular/core';
import { faGrin } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  faGrin = faGrin;

  constructor() { }

  ngOnInit(): void {
  }

}
