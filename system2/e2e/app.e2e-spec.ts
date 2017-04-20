import { System2Page } from './app.po';

describe('system2 App', () => {
  let page: System2Page;

  beforeEach(() => {
    page = new System2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
