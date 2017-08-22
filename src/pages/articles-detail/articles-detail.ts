import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ArticlesProvider } from '../../providers/articles/articles';

/**
 * Generated class for the ArticlesDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-articles-detail",
  templateUrl: "articles-detail.html"
})
export class ArticlesDetailPage {
  protected article: any;
  protected slug: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public articlesProvider: ArticlesProvider
  ) {
    this.slug = navParams.get("slug");
    this.getSingleArticle();
  }

  ionViewDidLoad() {
  }

  getSingleArticle() {
    return this.articlesProvider.getSingleArticle(this.slug)
      .subscribe(res => {
        this.article = res.article;
        console.log(this.article.title);
        
      });
  }
}
