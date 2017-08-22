import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArticlesAddPage } from './articles-add';

@NgModule({
  declarations: [
    ArticlesAddPage,
  ],
  imports: [
    IonicPageModule.forChild(ArticlesAddPage),
  ],
})
export class ArticlesAddPageModule {}
