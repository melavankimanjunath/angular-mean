import {Injectable} from "@angular/core";
import {Http,Headers} from "@angular/http";
import "rxjs/add/operator/map";

@Injectable()
export class TodoService{
    constructor(private _http: Http){

    }
    getTodos(){
        return this._http.get('/api/todos')
            .map(res=>res.json())
            ;
    }
    addTodo(newTodo){
        var headers = new Headers();
        headers.append('Content-Type','application/json')
        return this._http.post(
                            '/api/todos',
                            JSON.stringify(newTodo),
                            {headers:headers}
                            )
            .map(res=>res.json())
            ;
    }

    deleteTodo(id){
       return this._http.delete('/api/todo/id/'+id)
       .map(res=>res.json())
            ;
    }
    
    udpateStatus(_todo){
        var headers = new Headers();
        headers.append('Content-Type','application/json')
        return this._http.put(
                            '/api/todo/id/'+_todo._id,
                            JSON.stringify(_todo),
                            {headers:headers}
                            )
            .map(res=>res.json())
            ;
    }
}
