import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, RequestOptions, Headers } from "@angular/http";
import { ApiConfig } from '../../app/api.config';


@Injectable()
export class LoginProvider {
  public baseUrl:any;
  
  constructor(public http: Http) {}

  login(user) {
    let request = {
      "user": {
        "email": user.email,
        "password": user.password
      }
    }
    var headers: Headers = new Headers();

    headers.append("content-type", "application/json");

    let option = new RequestOptions({ headers: headers });
    
    return this.http
      .post(ApiConfig.BASE_URL+'users/login', request, option)
      .map(res => res.json());
  }

}
