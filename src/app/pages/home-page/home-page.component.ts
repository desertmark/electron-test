import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {
  public static route: Route = { path: '', component: HomePageComponent }
  constructor() { }

  ngOnInit() {
  }

}
