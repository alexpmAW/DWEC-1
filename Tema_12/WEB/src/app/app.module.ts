import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlumnosNoCreativosComponent } from './alumnos-no-creativos/alumnos-no-creativos.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnosNoCreativosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
