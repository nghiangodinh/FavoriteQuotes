import { QuoteService } from "./../../services/quotes";
import { Component, OnInit } from "@angular/core";
import {
  AlertController,
  IonicPage,
  NavController,
  NavParams
} from "ionic-angular";
import { Quote } from "../../data/quotes.interface";

@IonicPage()
@Component({
  selector: "page-quotes",
  templateUrl: "quotes.html"
})
export class QuotesPage implements OnInit {
  public quoteGroup: {
    category: string;
    icon: string;
    quotes: Quote[];
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private quoteService: QuoteService
  ) {}

  public ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }

  public onAddToFavorites(quote: Quote) {
    const alert = this.alertCtrl.create({
      title: "Add Quote",
      subTitle: "Are you sure you want to add the quote?",
      buttons: [
        {
          text: "Yes, please go ahead",
          handler: () => {
            this.quoteService.addQuoteToFavorites(quote);
          }
        },
        {
          text: "No, I changed my mind",
          role: "cancel",
          handler: () => {
            // TODO:
          }
        }
      ]
    });

    alert.present();
  }

  isFavorite(quote) {
    return this.quoteService.isQuoteFavorite(quote);
  }

  onRemoveFromFavorites(quote) {
    this.quoteService.removeQuoteFromFavorites(quote);
  }
}
