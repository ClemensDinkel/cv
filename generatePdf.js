const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("file:///D:/Projects/cv/page1-de.html")
  await page.pdf({ path: "page1.pdf", format: "A4", printBackground: true });
  await page.goto("file:///D:/Projects/cv/page2-de.html")
  await page.pdf({ path: "page2.pdf", format: "A4", printBackground: true });
  await browser.close();
})();
