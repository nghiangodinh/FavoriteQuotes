import { Injectable } from "@angular/core";
import { Quote } from "./../data/quotes.interface";

@Injectable()
export class QuoteService {
  private favoriteQuotes: Quote[] = [];

  public addQuoteToFavorites(quote: Quote) {
    const q = this.favoriteQuotes.find(q => q.id === quote.id);
    if (!q) {
      this.favoriteQuotes.push(quote);
      console.log(this.favoriteQuotes);
    }
  }

  public removeQuoteFromFavorites(quote: Quote) {
    const position = this.favoriteQuotes.findIndex((quoteEle: Quote) => {
      return quoteEle.id === quote.id;
    });
    this.favoriteQuotes.splice(position);
  }

  public getFavoriteQuotes() {
    return this.favoriteQuotes.slice()
  }

  public isQuoteFavorite(quote: Quote) {
    return this.favoriteQuotes.find(q => q.id === quote.id);
  }
}
