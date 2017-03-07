import { MyHerosJourneyPage } from './app.po';

describe('my-heros-journey App', () => {
  let page: MyHerosJourneyPage;

  beforeEach(() => {
    page = new MyHerosJourneyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
