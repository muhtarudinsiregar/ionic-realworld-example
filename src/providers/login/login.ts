import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, RequestOptions, Headers, RequestMethod } from "@angular/http";


@Injectable()
export class LoginProvider {
  public baseUrl:any;
  
  constructor(public http: Http) {
    this.baseUrl = `http://localhost:8000/`;
  }

  login(user) {
    let request = {
      "user": {
        "email": user.email,
        "password": user.password
      }
    }
    var headers: Headers = new Headers();

    headers.append("content-type", "application/json");

    let option = new RequestOptions({headers: headers});
    return this.http
      .post(`${this.baseUrl}api/users/login`, request, option)
      .map(res => res.json());
  }

}
