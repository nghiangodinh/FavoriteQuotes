import { QuoteService } from './../../services/quotes';
import { Component, OnInit } from "@angular/core";
import {ModalController, IonicPage,  NavController,  NavParams} from 'ionic-angular';
import { Quote } from '../../data/quotes.interface';
import { QuotePage} from "../pages"

@Component({
  selector: "page-favorites",
  templateUrl: "favorites.html"
})
export class FavoritesPage {

  public quotes: Quote[]

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public quoteService: QuoteService,
    public modalCtrl: ModalController) {}


  ionViewWillEnter() {
    this.quotes = this.quoteService.getFavoriteQuotes()
  }

  public onViewQuote(quote: Quote) {
    const modal = this.modalCtrl.create(QuotePage);
    modal.present();
  }
}
