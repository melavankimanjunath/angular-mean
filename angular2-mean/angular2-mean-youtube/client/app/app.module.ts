import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import { RouterModule } from '@angular/router';

import {AppComponent} from "./app.component";
import {TodosComponent} from "./components/todos/todos.component";
import { FormsComponent } from './components/forms/forms.component';


const ROUTES = [
  {
    path: '',
    component: TodosComponent
  },
 
  {
    path: 'forms',
    component: FormsComponent
  }
];

@NgModule({
    imports:[
            BrowserModule,
            HttpModule,
            FormsModule,
            RouterModule.forRoot(ROUTES)            
        ],
    declarations:[
            AppComponent,
            TodosComponent,
            FormsComponent
        ],
    bootstrap:[AppComponent]
})

export class AppModule {
    
}