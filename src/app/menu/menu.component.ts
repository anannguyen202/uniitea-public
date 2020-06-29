import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  showMobileMenu: boolean = false;
  textMenus = [];
  photoMenus = [];

  constructor() { }

  ngOnInit(): void {
    // Photo
    this.photoMenus = [
      {
        img: 'https://gutacafe.com/wp-content/uploads/2018/10/34-americano.png',
        name: 'Espresso',
        sizeM: '24',
        sizeL: '36'
      },
      {
        img: 'https://gutacafe.com/wp-content/uploads/2018/10/34-americano.png',
        name: 'Espresso',
        sizeM: '24',
        sizeL: '36'
      },
      {
        img: 'https://gutacafe.com/wp-content/uploads/2018/10/34-americano.png',
        name: 'Espresso',
        sizeM: '24',
        sizeL: '36'
      },
      {
        img: 'https://gutacafe.com/wp-content/uploads/2018/10/34-americano.png',
        name: 'Espresso',
        sizeM: '24',
        sizeL: '36'
      },
      {
        img: 'https://gutacafe.com/wp-content/uploads/2018/10/34-americano.png',
        name: 'Espresso',
        sizeM: '24',
        sizeL: '36'
      },
      {
        img: 'https://gutacafe.com/wp-content/uploads/2018/10/34-americano.png',
        name: 'Espresso',
        sizeM: '24',
        sizeL: '36'
      }
    ]

    // Text
    this.textMenus.push(this.createCategory(
      1,
      'Trà',
      [
        'Ô long bốn mùa|hot', 'Đào', 'Đào cam sả', 'Ổi hồng', 'Lục trà hồng kim', 'Trái cây nhiệt đới'
      ]
    ));  
    this.textMenus.push(this.createCategory(
      1,
      'Trà sữa',
      [
        'Truyền thống', 'Chocolate', 'Matcha', 'Khoai môn'
      ]
    ));
    this.textMenus.push(this.createCategory(
      2,
      'Đá xay',
      [
        'Truyền thống', 'Chocolate', 'Matcha', 'Khoai môn'
      ]
    ));
    this.textMenus.push(this.createCategory(
      2,
      'Soda',
      [
        'Đại dương', 'Trái cây', 'Kiwi đậu biếc'
      ]
    ));
    this.textMenus.push(this.createCategory(
      3,
      'Đường đen',
      [
        'trân châu sữa tươi', 'Trân châu Match', 'Trân châu khoai môn', 'Trân châu ca cao', 'Sữa tươi than tre trứng muối'
      ]
    ));
    this.textMenus.push(this.createCategory(
      3,
      'Ăn vặt',
      [
        'Bánh tráng sốt tắc'
      ]
    ));
  }

  createCategory(position, label, listByName) {
    let list = [];

    for (let i in listByName) {
      let item = listByName[i];
      let name = item != null ? item.split('|')[0] : '';
      let tryHot = item != null ? typeof item.split('|')[1] !== 'undefined' && item.split('|')[1] == 'hot' : false;

      list.push(this.createProduct(name, tryHot));
    }    

    return {
      position: position,
      label: label,
      list: list
    }
  }

  createProduct(name, tryHot = false, m = 24, l = 36) {
    return {
      name: name,
      sizeM: m,
      sizeL: l,
      tryHot: tryHot
    }
  }

  toggleMenu() {
    this.showMobileMenu = !this.showMobileMenu;

    if (this.showMobileMenu) {
      $('.menu-text').css('opacity', '1');
      $('.menu-text').css('pointer-events', 'unset');
      $('html, body').css('overflowY', 'hidden');
      // $('#main-menu .row').css('padding-right', '16.6px');
      $('.bt-menu img.bt-img').css('opacity', 1);
      $('.bt-menu img.bt-text').css('opacity', 0);
    }
    else {
      $('.menu-text').css('opacity', '0');
      $('.menu-text').css('pointer-events', 'none');
      $('html, body').css('overflowY', 'unset');
      // $('#main-menu .row').css('padding-right', 'unset');
      $('.bt-menu img.bt-img').css('opacity', 0);
      $('.bt-menu img.bt-text').css('opacity', 1);
    }
  }

}
