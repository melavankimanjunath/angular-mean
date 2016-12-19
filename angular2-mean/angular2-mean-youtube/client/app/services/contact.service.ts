import {Injectable} from "@angular/core";
import {Http,Headers} from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class ContactService{
    constructor(private _http: Http){

    }
   
    saveContacts(formData){
        var headers = new Headers();
        headers.append('Content-Type','application/json')
        return this._http.post(
                            '/api/contacts',
                            JSON.stringify(formData),
                            {headers:headers}
                            )
            .map(res=>res.json())
            ;
    }
}
