import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgPipesModule} from 'ngx-pipes';


import { AppComponent } from './app.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { SortByPipe } from './sort-by.pipe';



@NgModule({
  declarations: [
    AppComponent,
    FormulaireComponent,
    SortByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgPipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
