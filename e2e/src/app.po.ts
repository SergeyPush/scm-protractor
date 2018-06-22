import { browser, by, element, Key } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('http://google.com.ua');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  searchText(text:string){
    element(by.name('q')).sendKeys(text);
    element(by.name('q')).sendKeys(Key.ENTER);
  }
}
