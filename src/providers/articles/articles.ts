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
    
  }
  
  getArticles() {
    return this.storage.get("userdata").then(val => {
      this.token = "Token " + val.token;

      var headers: Headers = new Headers();

      headers.append("Authorization", this.token);
      headers.append("Access-Control-Allow-Origin", "http://127.0.0.1:8101");

      let options = new RequestOptions({ headers: headers });

      return this.http
        .get(ApiConfig.BASE_URL + "articles/feed", options)
        .map(res => res.json());
    })
  }

  getSingleArticle(slug: string) {
    return this.http
      .get(ApiConfig.BASE_URL + "articles/" + slug)
      .map(res => res.json());
  }
}
