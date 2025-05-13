import { Page, expect } from '@playwright/test';
import exp from 'constants';

/**
 * This test was generated using Ranger's test recording tool. The test is supposed to:
 * 1. Navigate to Wikipedia's homepage
 * 2. Assert there are less than 7,000,000 articles in English
 * 3. Assert the page's text gets smaller when the 'Small' text size option is selected
 * 4. Assert the page's text gets larger when the 'Large' text size option is selected
 * 5. Assert the page's text goes back to the default size when the 'Standard' text size option is selected
 *
 * Instructions: Run the test and ensure it performs all steps described above
 *
 * Good luck!
 */
export async function run(page: Page, params: {}) {
    /** STEP: Navigate to URL */
    await page.goto('https://en.wikipedia.org/wiki/Main_Page');
    await page.reload();

    /** STEP: Click the link to view the total number of articles in English */
    const totalArticlesLink = page.getByTitle('Special:Statistics').last();
    await totalArticlesLink.click();

    /* STEP: Verify whether the number is less than 7,000,000. */
    const articlesEnglishNumberText = await page
        .getByText('6,99')
        .textContent();
    const articlesEnglishNumber = parseInt(
        articlesEnglishNumberText?.replace(/,/g, '') || '0',
        10
    );
    expect(articlesEnglishNumber).toBeLessThan(7000000);

    /** STEP: Select the 'Light' color option in the color settings */
    const lightColorOption = page.getByRole('radio', { name: 'Light' });
    await lightColorOption.click();

    /** STEP: Assert the 'Light' color option is checked */
    expect(lightColorOption).toBeChecked();

    /** STEP: Click the 'Dark' color option to change the color settigns */
    const darkColorOption = page.getByRole('radio', { name: 'Dark' });
    await darkColorOption.click();

    /** STEP: Assert the 'Dark' color option is checked */
    expect(darkColorOption).toBeChecked();

    /** STEP: Click the 'Automatic' color option to change the color settigns */
    const automaticColorOption = page.getByRole('radio', {
        name: 'Automatic',
    });
    await automaticColorOption.click();

    /** STEP: Assert the 'Automatic' color option is checked */
    expect(automaticColorOption).toBeChecked();
}
