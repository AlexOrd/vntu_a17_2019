import {Component, Inject} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string;

  constructor(private translate: TranslateService, @Inject('state') private state) {
    // all languages used
    const langs = ['ua', 'en'];
    const browserLang = translate.getBrowserLang();
    translate.addLangs(langs);
    // setting the default lang - if no lang is used
    translate.setDefaultLang('ua');

  }
}
