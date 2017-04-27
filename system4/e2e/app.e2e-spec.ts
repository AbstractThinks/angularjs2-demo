import { System3Page } from './app.po';

describe('system3 App', () => {
  let page: System3Page;

  beforeEach(() => {
    page = new System3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
