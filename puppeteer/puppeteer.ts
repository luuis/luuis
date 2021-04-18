import * as puppeteer from 'puppeteer';

class PuppeteerService {
    browser;
    page;

    async init() {
        this.browser = await puppeteer.launch({
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--disable-infobars',
            '--window-position=0,0',
            '--ignore-certifcate-errors',
            '--ignore-certifcate-errors-spki-list',
            '--incognito',
        ],
        headless: true,
        });
    }

    async goToPage(url: string) {
        if (!this.browser) {
            await this.init();
        }
        this.page = await this.browser.newPage();

        await this.page.setExtraHTTPHeaders({
            'Accept-Language': 'es-MX',
        });

        await this.page.goto(url, {
            waitUntil: `networkidle0`,
        });
    }

    async close() {
        await this.page.close();
        await this.browser.close();
    }

    async getLatestInstagramPostsFromAccount(acc: string, n: number) {
        const page = `https://www.picuki.com/profile/${acc}`;
        await this.goToPage(page);

        let previousHeight;

        try {
            previousHeight = await this.page.evaluate(`document.body.scrollHeight`);
            await this.page.evaluate(
                `window.scrollTo(0, document.body.scrollHeight)`
            );
            await this.page.waitForFunction(
                `document.body.scrollHeight > ${previousHeight}`
            );
            await this.page.waitFor(1000);

            const nodes = await this.page.evaluate(() => {
                const images = document.querySelectorAll(`.post-image`);
                return [].map.call(images, img => img.src);
            });

            return Promise.resolve(nodes.slice(0, n));
        } catch (error) {
            console.log('Error', error);
            return Promise.resolve([]);
        }
    }
}

export const puppeteerService = new PuppeteerService();
