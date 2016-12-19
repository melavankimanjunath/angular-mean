import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule} from "@angular/http";
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import { RouterModule } from '@angular/router';

import {AppComponent} from "./app.component";
import {TodosComponent} from "./components/todos/todos.component";
import { FormsComponent } from './components/forms/forms.component';
import { ContactComponent } from './components/forms/contact.component';


const ROUTES = [
  {
    path: '',
    component: TodosComponent
  },
 
  {
    path: 'forms',
    component: FormsComponent
  },
  {
    path: 'contacts',
    component: ContactComponent
  }
];

@NgModule({
    imports:[
            BrowserModule,
            HttpModule,
            FormsModule,
            ReactiveFormsModule,
            RouterModule.forRoot(ROUTES)            
        ],
    declarations:[
            AppComponent,
            TodosComponent,
            FormsComponent,
            ContactComponent
        ],
    bootstrap:[AppComponent]
})

export class AppModule {
    
}

