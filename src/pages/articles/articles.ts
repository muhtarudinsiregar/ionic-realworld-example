import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ArticlesProvider } from '../../providers/articles/articles';
import { ArticlesDetailPage } from '../articles-detail/articles-detail';
import { ArticlesAddPage } from '../articles-add/articles-add';

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
  public articles: any;
  public article: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public articleProvider: ArticlesProvider
  ) {}

  ionViewDidLoad() {
    this.getArticles();
  }

  getArticles() {
    return this.articleProvider.getArticles().then(res => {
      res.subscribe(val => {
        this.articles = val.articles;
      });
    });
  }

  detailArticle(article: any) {
    this.navCtrl.push(ArticlesDetailPage, {
      slug: article.slug
    });
  }

  addArticle() {
    this.navCtrl.push(ArticlesAddPage);
  }
}
