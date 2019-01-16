import { Component } from '@angular/core';
import { CardsService } from './cards.service';

export interface PageData {
    "kind": "books#volumes",
    "totalItems": 1236,
    "items": [{}]
 }

@Component({
  selector: 'featured-cards',
  templateUrl: './featuredcards.component.html'
})
export class FeaturedcardsComponent {

  featuredContentResp: any;

  constructor(private dataServ: CardsService){
    this.dataServ.getData().subscribe(dataR => {
      let dataRep: PageData = dataR;
      this.featuredContentResp = dataRep.items.splice(-2, 2)
    });
  }

}
