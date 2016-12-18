import { Component } from '@angular/core';

@Component({
  moduleId:module.id,
  selector: 'app-form',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  posts: any = [];

  constructor() {
    console.log('shekhar');
  }
}
