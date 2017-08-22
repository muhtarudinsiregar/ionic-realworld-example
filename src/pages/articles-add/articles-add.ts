import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController
} from "ionic-angular";
import { Article } from '../../models/article-add';
import { ArticlesProvider } from '../../providers/articles/articles';

/**
 * Generated class for the ArticlesAddPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-articles-add",
  templateUrl: "articles-add.html"
})
export class ArticlesAddPage {
  article = {} as Article;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public articleProvider: ArticlesProvider,
    public toast: ToastController
  ) { }

  ionViewDidLoad() {}

  saveArticle(article: Article, form) {
    let request = {
      'article': article
    }
    
    this.articleProvider.saveArticle(request).subscribe(res => {
      let toast = this.toast.create({
        'message': 'Article was added successfully!',
        'duration': 3000
      });

      toast.present();
      form.reset();
    });
    
  }
}
