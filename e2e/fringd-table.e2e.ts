import { browser, by, element } from 'protractor';

describe('md-data-table-proto App', () => {
  beforeEach(() => {
    return browser.get('/');
  });

  it('should display message saying app works', async () => {
    var names = element.all(by.css('tr td:first-child'));
    expect(names.count()).toEqual(13);
  });
});
