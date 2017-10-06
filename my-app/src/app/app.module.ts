import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
 imports: [
 BrowserModule,
 CommonModule,
 FormsModule,
 AgmCoreModule.forRoot({
 apiKey: 'MY_API_KEY'
 })
 ],
 providers: [],
 declarations: [
 AppComponent
 ],
 bootstrap: [AppComponent]
})
export class AppModule {}