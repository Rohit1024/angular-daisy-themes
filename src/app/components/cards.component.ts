import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="grid lg:grid-cols-3 gap-4 m-4 place-items-center sm:grid-cols-1 md:grid-cols-2"
    >
      @for (card of totalCards; track card; let index = $index) {
      <div class="card w-full bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img
            src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
            class="rounded-xl"
          />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">Shoes no : {{ index }}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      }
    </div>
  `,
})
export class CardsComponent {
  totalCards = new Array(6);
}
