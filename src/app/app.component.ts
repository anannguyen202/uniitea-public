import { Component, LOCALE_ID, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'uniitea';

  constructor(
    public translate: TranslateService
  ) {
    translate.addLangs(['vi', 'en']);

    if (localStorage.getItem('locale')) {
      const browserLang = localStorage.getItem('locale');      
      translate.use(browserLang.match(/vi|en/) ? browserLang : 'vi');
    } else {
      localStorage.setItem('locale', 'vi');
      translate.use('vi');
    }
  }

}