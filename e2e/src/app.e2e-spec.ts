import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    browser.waitForAngularEnabled(false);
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    page.searchText('Typescript');

    browser.sleep(2222);
    console.log(browser.getTitle);
    expect(browser.getTitle).toContain('Typescript - Поиск в Google');

  });
});
