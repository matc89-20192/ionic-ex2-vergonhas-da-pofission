import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Page2 } from '../page2/page2'

@IonicPage()
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {

  public displayed_message = "Oi, Fulano!";
  public username = "Fulano"

  constructor(public navCtrl: NavController) {

  }

  switchPage() {
    this.navCtrl.push(Page2, {
      current_user: this.username,
      callback: this.onPage2Return
    });
  }

  onPage2Return = (new_username) => {
    return new Promise((resolve, reject) => {
      this.username = new_username;
      this.displayed_message = new_username ? "Oi, " + new_username + "!" : "Oi!";
      resolve();
    });
  }

}
