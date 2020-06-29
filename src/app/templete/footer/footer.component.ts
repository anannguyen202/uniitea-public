import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public translate: TranslateService) { }

  ngOnInit(): void {
    $(".scrollTo").on('click', function (e) {
      e.preventDefault();
      var target = $(this).attr('href');
      $('html, body').animate({
        scrollTop: ($(target).offset().top)
      }, 1000);
    });

    $('#gform').submit(function (e) {
      $('.popup-loading').css("opacity", "1");
      $('.popup-loading').css("pointer-events", "unset");
      e.preventDefault();
      $.ajax({
        url: 'https://script.google.com/macros/s/AKfycbwpmtzgAVYkIq3P1f4enxnrRCKYMsteQ7cchDJF/exec',
        // https://script.google.com/macros/s/AKfycbwpmtzgAVYkIq3P1f4enxnrRCKYMsteQ7cchDJF/exec
        type: 'post',
        data: $('#gform').serialize(),
        success: function () {
          alert("Thank you, your message was sent successfully.");
          $('.popup-loading').css("opacity", "0");
          $('.popup-loading').css("pointer-events", "none");
          $('#gform').trigger("reset");
        }
      });
    });
  }

  changeLang(language: string) {
    localStorage.setItem('locale', language);
    this.translate.use(language);
  }

}
