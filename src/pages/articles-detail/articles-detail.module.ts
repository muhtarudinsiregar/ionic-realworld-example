import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArticlesDetailPage } from './articles-detail';

@NgModule({
  declarations: [
    ArticlesDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ArticlesDetailPage),
  ],
})
export class ArticlesDetailPageModule {}
