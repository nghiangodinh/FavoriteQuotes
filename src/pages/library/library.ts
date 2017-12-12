import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Quote } from "../../data/quotes.interface";
import quotes from "../../data/quotes";
import { QuotesPage } from '../pages';


@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {
  public quotesPage = QuotesPage
  public quoteCollection: {
    category: string,
    icon: string,
    quotes: Quote[] }[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public ngOnInit() {
    this.quoteCollection = quotes;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LibraryPage');
  }



}
