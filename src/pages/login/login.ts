import { Component } from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  LoadingController,
  AlertController
} from "ionic-angular";

import { User } from '../../models/user';
import { LoginProvider } from '../../providers/login/login';
import { HomePage } from '../home/home';

import { Storage } from "@ionic/storage";

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html",
  providers: [LoginProvider]
})
export class LoginPage {
  user = {} as User;
  isEnable: boolean = true;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public loginProvider: LoginProvider,
    public alertCtrl: AlertController,
    public storage: Storage
  ) {
    storage.get('loggedIn').then(val => {
      console.log(val)
      if (val) {
        navCtrl.setRoot(HomePage);
      }
    })
  }
  
  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }
  
  login(user: User) {
    let loader = this.loadingCtrl.create({
      content: "loading....."
    });
    
    loader.present().then(() => {
      this.loginProvider.login(user).subscribe(data => {
        this.navCtrl.setRoot(HomePage);

        this.storage.set("userdata", data.user);
        this.storage.set("loggedIn", "true");
        
        console.log(this.loggedIn())
        
        loader.dismiss();
      }, e => {
        
        this.showAlert(e.json().errors);
        loader.dismiss();
      });
    }).catch((err) => {
      this.showAlert('Gagal Login');
      loader.dismiss();
    });
  }
  
  showAlert(status) {
    let alert = this.alertCtrl.create({
      title: "Ooops!",
      subTitle: status,
      buttons: ["OK"]
    });
    alert.present();
  }

  loggedIn() {
    let isLogin: boolean = false;

    return this.storage.get('loggedIn').then((val) => {
      isLogin = val;  
    })
  }

  logout() {
    let loader = this.loadingCtrl.create({
      content: 'logging out....'
    })

    loader.present().then(() => {
      this.storage.remove('userdata');
      this.storage.set('loggedIn', "false");

      loader.dismiss().then(() => {
        this.navCtrl.setRoot(LoginPage);
      })
    })
  }
}
