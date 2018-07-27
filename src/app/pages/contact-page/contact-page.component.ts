import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  public static route: Route = { path: 'contact', component: ContactPageComponent }
  constructor() { }

  ngOnInit() {
  }

}
