import { Component } from '@angular/core';

@Component({
 selector: 'app-root',
 templateUrl: 'app.component.html',
 styleUrls: ['app.component.css'],
})
export class AppComponent {
 title: string = 'My first angular2-google-maps project';
 lat1: number = 51.531826;
 lng1: number = -0.124391;
 lat2: number = 51.511899;
 lng2: number = -0.123270;
}