import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  config: SwiperOptions = {
    pagination: {
      el: '.swiper-pagination', clickable: true,
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30,
    height: 900,
    effect: 'coverflow',
    autoplay: true
  };

  images: any = [];

  constructor() { }

  ngOnInit(): void {
    this.images = [
      '../../assets/img/1-1_our_story_o.jpg',
      '../../assets/img/1-1_our_story_3_o.jpg',
      '../../assets/img/1-1_our_story_2_o.jpg'
    ]
  }

  goSectionBy(sectionId) {
    if (typeof sectionId !== 'undefined' && sectionId) {
      $('html, body').animate({
        scrollTop: $(`#${sectionId}`).offset().top
      }, 'slow');
    }
  }
}