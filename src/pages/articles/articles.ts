import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ArticlesProvider } from '../../providers/articles/articles';


/**
 * Generated class for the ArticlesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-articles",
  templateUrl: "articles.html"
})
export class ArticlesPage {
  public token: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public articleProvider: ArticlesProvider
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ArticlesPage");
  }

  getArticles() {
    this.articleProvider.getArticles().subscribe(res => {
      console.log(res);
      
    });
  }
}
