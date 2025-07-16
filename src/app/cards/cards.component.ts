import { Component } from '@angular/core';
import { cardData } from './cardsData';
import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards',
  imports: [CardComponent, CommonModule],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css',
})
export class CardsComponent {
  cards = cardData;
}
