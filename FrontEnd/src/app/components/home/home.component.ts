import { Component, OnInit } from '@angular/core';
import { AppConstants } from 'src/app/settings/app-constants';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 appTitle = AppConstants.APP_TITLE;
  constructor() { }

  ngOnInit(): void {
  }

}
