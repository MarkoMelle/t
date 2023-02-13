// import puppetteer from 'puppeteer';
// import { fork } from 'child_process';

jest.setTimeout(30000); // default puppeteer timeout

describe('Popover', () => {
  // let server = null;
  const baseUrl = 'http://localhost:9999';

  beforeEach(async () => {
    await page.goto(baseUrl);
});

    // browser = await puppetteer.launch({
    //   headless: false,
    //   slowMo: 5,
    //   devtools: true,
    // });
  //   page = await browser.newPage();
  // });

  // afterAll(async () => {
  //   await browser.close();
  //   server.kill();
  // });


  test('should popover toggle', async () => {
    await page.goto(baseUrl);

    const btn = await page.$('.btn');

    await btn.click();

    await page.waitForSelector('.popover');
    await btn.click();
    await page.waitForSelector('.popover', { hidden: true });
  });
});