import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class CardService {

    private cardGet = 'http://localhost/kodeinside.com/index/index.php/card/card/getList';
    private headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' });
    private options: RequestOptions;

    constructor(private http: Http) {
        this.options = new RequestOptions({ headers: this.headers, method: 'post' });
    }

    public getList() {
        return this.http.get(this.cardGet, this.options).toPromise().then(
            response => {
                return response.json().data;
            }
        );
    }

    public handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || ' error');
    }

}
