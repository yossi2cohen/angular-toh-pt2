import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { AgmCoreModule } from '@agm/core';
import { AgmapComponent } from './agmap/agmap.component';
import data from './config.json';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    AgmapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: data.apiKey
      /* apiKey is required, unless you are a 
      premium customer, in which case you can 
      use clientId 
      */
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
