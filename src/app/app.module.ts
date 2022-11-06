import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OutputComponent } from './output/output.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MapComponent } from './map/map.component';
import { InputService } from './input.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    OutputComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LeafletModule,
    ReactiveFormsModule,
    MatButtonModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [ InputService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
