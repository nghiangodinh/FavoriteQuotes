import { SettingsService } from "./../../services/settings";
import { QuoteService } from "./../../services/quotes";
import { Component, OnInit } from "@angular/core";
import {
  ModalController,
  IonicPage,
  NavController,
  NavParams
} from "ionic-angular";
import { Quote } from "../../data/quotes.interface";
import { QuotePage } from "../pages";

@Component({
  selector: "page-favorites",
  templateUrl: "favorites.html"
})
export class FavoritesPage {
  public quotes: Quote[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public quoteService: QuoteService,
    public modalCtrl: ModalController,
    private settingsService: SettingsService
  ) {}

  ionViewWillEnter() {
    this.quotes = this.quoteService.getFavoriteQuotes();
  }

  onViewQuote(quote: Quote) {
    const modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();

    modal.onDidDismiss(remove => {
      if (remove) {
        this.onRemoveFromFavorites(quote);
      }
    });
  }

  onRemoveFromFavorites(quote) {
    this.quoteService.removeQuoteFromFavorites(quote);
    this.quotes = this.quoteService.getFavoriteQuotes();
  }

  getBackground() {
    return this.settingsService.isAltBackground()
      ? "altQuoteBackground"
      : "quoteBackground";
  }

  isAltBackground() {
    return this.settingsService.isAltBackground()
  }
}
