import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { JsonUser } from '../models/JsonUser';


@Injectable({
    providedIn: 'root'
})
export class JsonUserService {

    constructor(private http: HttpClient) { }

    getUsers() {
        return this.http.get<JsonUser[]>('https://jsonplaceholder.typicode.com/users');
    }
}
