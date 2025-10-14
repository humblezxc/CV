const puppeteer = require("puppeteer");

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto("http://localhost:5173", { waitUntil: "networkidle0" });

    // <--- ADD THIS: hide printed link annotations (the small grey URLs)
    await page.addStyleTag({
        content: `
      @media print {
        /* remove browser-added printed link text/footnotes */
        a[href]::after,
        a[href]:after {
          content: none !important;
          display: none !important;
        }

        /* safety: prevent browsers from inserting their own list of links */
        body::after {
          content: none !important;
          display: none !important;
        }
      }
    `
    });

    await page.pdf({
        path: "Yaroslav_Stopenchuk_CV_TEST.pdf",
        format: "A4",
        printBackground: true,
        margin: { top: "0cm", right: "0cm", bottom: "0cm", left: "0cm" },
    });

    await browser.close();
})();
