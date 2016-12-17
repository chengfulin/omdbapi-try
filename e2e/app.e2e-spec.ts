import { Assign2Page } from './app.po';

describe('assign-2 App', function() {
  let page: Assign2Page;

  beforeEach(() => {
    page = new Assign2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
