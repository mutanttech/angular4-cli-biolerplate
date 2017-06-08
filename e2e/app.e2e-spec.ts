import { XAppPage } from './app.po';

describe('x-app App', () => {
  let page: XAppPage;

  beforeEach(() => {
    page = new XAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
