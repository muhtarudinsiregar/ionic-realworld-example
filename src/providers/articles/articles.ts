import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { Storage } from "@ionic/storage";
import { ApiConfig } from '../../app/api.config';

/*
Generated class for the ArticlesProvider provider.

See https://angular.io/docs/ts/latest/guide/dependency-injection.html
for more info on providers and Angular DI.
  */
@Injectable()
export class ArticlesProvider {
  public token: string;
  constructor(public http: Http, public storage: Storage) {
    storage.get("userdata").then(val => {
      this.token = val.token;
      console.log(this.token);
    });
  }
  
  getArticles() {
    var headers: Headers = new Headers();

    headers.append("Allow-Control-Allow-Origin", "*");
    let options = new RequestOptions({ headers: headers });

    return this.http
      .get(ApiConfig.BASE_URL+'articles/feed?token='+this.token, options)
      .map(res => { res.json() });
  }
}
