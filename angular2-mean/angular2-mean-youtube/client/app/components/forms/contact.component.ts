import { Component } from '@angular/core';
import { FormBuilder,Validators,FormControl} from '@angular/forms';
import { Contacts } from '../../components/contacts';
import { ContactService } from '../../services/contact.service';

@Component({
  moduleId:module.id,
  selector: 'app-form-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers:[ContactService]
})
export class ContactComponent {
  contactForm;
  contacts: Contacts;
  isSuccessMessage: boolean = false;
  
  protected _buildForm(){
    this.contactForm = this._formBuilder.group({
      email:["s@s.com",Validators.compose([Validators.required, this.mailFormat])],
      name:["shekhar",[Validators.minLength(5),Validators.maxLength(8),Validators.required]],
      mobile:["9999999999",Validators.required],
      comments:["nice section",Validators.required]
    });
  }

  mailFormat(control: FormControl): any {
      var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
      if (control.value != "" && (!EMAIL_REGEXP.test(control.value))) {
          return { "incorrectMailFormat": true };
      }
      return null;
  }

  

  constructor(private _formBuilder: FormBuilder,private _contactService: ContactService) {
    this._buildForm();
  }

  SubmitContactRequest(){
    // event.preventDefault();
    var formData = this.contactForm.value;    
    this._contactService.saveContacts(formData)
        .subscribe(contactData => {
          if(contactData){
            this.isSuccessMessage =true;
            this.reset();
          }
        });
  }

  reset(){
    this.contactForm.reset();
  }
}
