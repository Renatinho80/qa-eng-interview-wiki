import { Page, expect } from '@playwright/test';

export async function run(page: Page, params: {username: string, password: string}) {
    /** STEP: Navigate to URL and reload the page */
    await page.goto(
        'https://auth.wikimedia.org/enwiki/w/index.php?title=Special:UserLogin&returnto=Main_Page&centralauthLoginToken=241f518d1a2b0eca094ccaee61dc561f&usesul3=1&useformat=desktop&campaign=loginCTA'
    );

    /* STEP: Enter the label 'Username' to insert the parameter 'username'. */
    const usernameInput = page.getByLabel('Username');
    await usernameInput.fill(`${params.username}`);

    /* STEP: Enter the label 'Password' to insert the parameter 'passoword'. */
    const passwordInput = page.getByLabel('Password');
    await passwordInput.fill(`${params.password}`);

    /* STEP: Click the "Log In" button to access Wikipedia. */
    const loginButton = page.getByRole('button', {name: 'Log in'});
    await loginButton.click();
}
