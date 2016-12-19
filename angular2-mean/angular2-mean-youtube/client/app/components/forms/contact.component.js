"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var contact_service_1 = require("../../services/contact.service");
var ContactComponent = (function () {
    function ContactComponent(_formBuilder, _contactService) {
        this._formBuilder = _formBuilder;
        this._contactService = _contactService;
        this.isSuccessMessage = false;
        this._buildForm();
    }
    ContactComponent.prototype._buildForm = function () {
        this.contactForm = this._formBuilder.group({
            email: ["s@s.com", forms_1.Validators.compose([forms_1.Validators.required, this.mailFormat])],
            name: ["shekhar", [forms_1.Validators.minLength(5), forms_1.Validators.maxLength(8), forms_1.Validators.required]],
            mobile: ["9999999999", forms_1.Validators.required],
            comments: ["nice section", forms_1.Validators.required]
        });
    };
    ContactComponent.prototype.mailFormat = function (control) {
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        if (control.value != "" && (!EMAIL_REGEXP.test(control.value))) {
            return { "incorrectMailFormat": true };
        }
        return null;
    };
    ContactComponent.prototype.SubmitContactRequest = function () {
        var _this = this;
        // event.preventDefault();
        var formData = this.contactForm.value;
        this._contactService.saveContacts(formData)
            .subscribe(function (contactData) {
            if (contactData) {
                _this.isSuccessMessage = true;
                _this.reset();
            }
        });
    };
    ContactComponent.prototype.reset = function () {
        this.contactForm.reset();
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-form-contact',
        templateUrl: './contact.component.html',
        styleUrls: ['./contact.component.css'],
        providers: [contact_service_1.ContactService]
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, contact_service_1.ContactService])
], ContactComponent);
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.component.js.map