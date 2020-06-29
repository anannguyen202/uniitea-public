import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { TranslateService } from '@ngx-translate/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  showMobileMenu: boolean = false;

  constructor(
    public translate: TranslateService,
    private route: ActivatedRoute,
    private router: Router) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      if (event.url == '/store') {
        this.goSectionBy(event.url.replace('/', ''));
      }
      if (this.showMobileMenu) {
        this.toggleMenu(false);
      }
      $('html, body').css('overflowY', 'auto');
    });
  }

  ngOnInit(): void {
    var lastScrollTop = 0;
    var start = 900;

    $(window).scroll(function (event) {
      var st = $(this).scrollTop();
      console.log(st, lastScrollTop);

      if (st > start && st > lastScrollTop) {
        $('.scallop-m').css('display', 'block');
        $('#main-menu').css('padding', '0');
        $('.logo').css('height', '40px');
      } else if (st < start) {
        $('.scallop-m').css('display', 'none');
        $('#main-menu').css('padding', '10px 0px');
        $('.logo').css('height', '60px');
      }

      lastScrollTop = st;
    });
  }

  changeLang(language: string) {
    localStorage.setItem('locale', language);
    this.translate.use(language);
  }

  toggleMenu(toggle = !this.showMobileMenu) {
    this.showMobileMenu = toggle;

    $('#nav-icon1').toggleClass('open');

    if (this.showMobileMenu) {
      $('#mobile-menu').css('opacity', '1');
      $('#mobile-menu').css('margin-right', '0');
      $('#mobile-menu').css('pointer-events', 'unset');
      $('.d').css('background-position', 'right 0');
      $('html, body').css('overflow', 'hidden');
      $('#main-menu').css('transform', 'translateY(-60px)');
    }
    else {
      $('#mobile-menu').css('opacity', '0');
      $('#mobile-menu').css('margin-right', '-100%');
      $('#mobile-menu').css('pointer-events', 'none');
      $('.d').css('background-position', 'right 80px');
      $('html, body').css('overflow', 'auto');
      $('#main-menu').css('transform', 'translateY(0)');
    }
  }

  goSectionBy(sectionId) {
    if (typeof sectionId !== 'undefined' && sectionId) {
      $('html, body').animate({
        scrollTop: $(`#${sectionId}`).offset().top
      }, 'slow');
    }
  }
}
