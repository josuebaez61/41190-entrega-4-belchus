import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AlumnosModule } from './alumnos/alumnos.module';
import { ProfesoresModule } from './profesores/profesores.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ObservablesComponent } from './observables/observables.component';
import { ObservablesModule } from './observables/observables.module';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AlumnosModule,
    ProfesoresModule,
    BrowserAnimationsModule,
    ObservablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
