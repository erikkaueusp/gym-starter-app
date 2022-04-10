import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlunoModule } from './featuring/aluno/aluno.module';
import { MenuModule } from './menu/menu.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenuModule,
    SharedModule,
    AlunoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
