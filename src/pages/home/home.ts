import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  rootNavCtrl: NavController;

  constructor(public navCtrl: NavController, navParams: NavParams) {
    this.rootNavCtrl = navParams.get('rootNavCtrl'); 
  }

  openNewPage(){
    this.rootNavCtrl.push(ContactPage);
  }

}
