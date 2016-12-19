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
var FormsComponent = (function () {
    function FormsComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.posts = [];
        this._buildForm();
    }
    FormsComponent.prototype._buildForm = function () {
        this.loginForm = this._formBuilder.group({
            email: ["", forms_1.Validators.required],
            password: ["", forms_1.Validators.required]
        });
    };
    FormsComponent.prototype.doLogin = function () {
        console.log(this.loginForm.value);
    };
    FormsComponent.prototype.reset = function () {
        this.loginForm.reset();
    };
    return FormsComponent;
}());
FormsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'app-form',
        templateUrl: './forms.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], FormsComponent);
exports.FormsComponent = FormsComponent;
//# sourceMappingURL=forms.component.js.map