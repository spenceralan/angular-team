import { SwimTeamPage } from './app.po';

describe('swim-team App', () => {
  let page: SwimTeamPage;

  beforeEach(() => {
    page = new SwimTeamPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
