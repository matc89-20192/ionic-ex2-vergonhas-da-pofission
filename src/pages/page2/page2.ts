import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {

  public username;
  public callback;
  navController: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.username = navParams.get('current_user');
    this.callback = navParams.get('callback');
  }

  clickConfirm() {
    this.username = this.username ? this.username : "";
    this.callback(this.username);
    this.navCtrl.pop();
  }


  clickCancel() {
    this.navCtrl.pop();
  }

}
