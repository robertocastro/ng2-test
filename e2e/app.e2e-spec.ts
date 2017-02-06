import { DialogPage } from './app.po';

describe('dialog App', function() {
  let page: DialogPage;

  beforeEach(() => {
    page = new DialogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
