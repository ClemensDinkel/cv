const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("file:///D:/Projects/cv/cv-de.html")
  await page.pdf({ path: "cv-de.pdf", format: "A4", printBackground: true });
  await browser.close();
})();
