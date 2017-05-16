import { PoliFolPage } from './app.po';

describe('poli-fol App', () => {
  let page: PoliFolPage;

  beforeEach(() => {
    page = new PoliFolPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
