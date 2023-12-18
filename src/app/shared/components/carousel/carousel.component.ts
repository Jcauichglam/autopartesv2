import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  customOptions: OwlOptions = {
    autoWidth: true,

    loop: false,
    rewind: true,
    autoplay:true,
    autoplayTimeout:2200,
    autoplayHoverPause:false,
    mouseDrag: false,
    autoHeight: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 1200,
    navText: ['&#8249', '&#8250;'],
    responsive: {
      0: {
        items: 1 
      },
      768: {
        items: 2
      },
      1024: {
        items: 1
      },
      1200: {
        items: 1
      },
    },
    nav: false
  }
}
