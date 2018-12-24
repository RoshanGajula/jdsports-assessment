import { Component } from '@angular/core';
import { CardsService } from './cards.service';

@Component({
  selector: 'featured-cards',
  templateUrl: './featuredcards.component.html'
})
export class FeaturedcardsComponent {

  featuredContentResp: any;

  constructor(private dataServ: CardsService){
    this.dataServ.getData().subscribe(dataR => this.featuredContentResp = dataR.items.splice(-2, 2));
  }

}
