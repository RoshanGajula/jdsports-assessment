import { Component, ElementRef } from '@angular/core';
import { CardsService } from './cards.service';

export interface PageData {
    "kind": "books#volumes",
    "totalItems": 1236,
    "items": [{}]
 }


@Component({
  selector: 'content-cards',
  templateUrl: './contentcards.component.html'
})
export class ContentcardsComponent  {
  contentResp: any;
  selectedItemId: any = (window.localStorage.getItem('currContentCard'))?window.localStorage.getItem('currContentCard'): "";

  constructor(private dataServ: CardsService, private elRef: ElementRef){
    this.dataServ.getData().subscribe(dataR => {
      let dataRep: PageData = dataR;
      dataRep.items.splice(-2, 2);
      this.contentResp = dataRep.items;
    });
  }

  handleCardSelection(event, cardId){
    if(this.selectedItemId === cardId){
      this.selectedItemId = "";
      window.localStorage.removeItem('currContentCard');  

    } else {
      this.selectedItemId = cardId;
      window.localStorage.setItem('currContentCard', cardId);  
    }
  }
}
