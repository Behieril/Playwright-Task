import { test, expect } from '@playwright/test';

test.describe('5TestCases', () =>{
  test('Registration test', async ({ page }) => {

    // Go to https://www.redmine.org/
    await page.goto('https://www.redmine.org/');
  
    // Click Регистрация
    await page.locator('.register').click();
    await expect(page).toHaveURL('https://www.redmine.org/account/register');
    
    //Enter random user login
    await page.locator('#user_login').click();
    const RandomUser = await Math.random().toString(36).substring(2,7)
    await page.locator('#user_login').fill(RandomUser);
    
    //Enter random password
    await page.locator('#user_password').click();
    const RandomPassword = await Math.random().toString(36).substring(2,7)
    await page.locator('#user_password').fill(RandomPassword);
  
    //Confirm password
    await page.locator('#user_password_confirmation').click();
    await page.locator('#user_password_confirmation').fill(RandomPassword);
  
    //Enter random firstname
    await page.locator('#user_firstname').click();
    const RandomFirstName = await Math.random().toString(36).substring(2,7)
    await page.locator('#user_firstname').fill(RandomFirstName);

    //Enter random lastname
    await page.locator('#user_lastname').click();
    const RandomLastName = await Math.random().toString(36).substring(2,7)
    await page.locator('#user_lastname').fill(RandomLastName);

    //Enter random email address
    await page.locator('#user_mail').click();
    const RandomEmail = await Math.random().toString(36).substring(2,7)+'@gmail.com'
    await page.locator('#user_mail').fill(RandomEmail);

    //Choose 'uk' user language
    await page.locator('#user_language').selectOption('uk');

    //Click on 'Submit' button
    await page.locator('input[name="commit"]').click();
    await expect(page).toHaveURL('https://www.redmine.org/login');
  
  });
  
  
  test('Site search test', async ({ page }) => {
  
    // Go to https://www.redmine.org/
    await page.goto('https://www.redmine.org/');
  
    // Click on search field
    await page.locator('.small').click();
  
    // Fill search field with text "Type"
    await page.locator('.small').fill('Type');
  
    // Press Enter
    await page.locator('.small').press('Enter');
    await expect(page).toHaveURL('https://www.redmine.org/projects/redmine/search?utf8=%E2%9C%93&wiki_pages=1&q=Type');
    
    // Click on first resault
    await page.locator('//dt[1]').click();
  
  });
  test('Sidebar links test', async ({ page }) => {

    // Go to https://www.redmine.org/
    await page.goto('https://www.redmine.org/');
  
    const sidebar  = page.locator("#sidebar")

    await expect(sidebar).toBeVisible();
  
    // Click 5.0.2 (2022-06-21) on sidebar
    await page.locator('//p/a[@href="/projects/redmine/wiki/Download" and contains (text(), 4.2)]').click();
    await expect(page).toHaveURL('https://www.redmine.org/projects/redmine/wiki/Download');
  
    // Click ("4.2.7 (2022-06-21)") on sidebar
    await page.locator('//p/a[@href="/projects/redmine/wiki/Download" and contains (text(), 5.0)]').click();
    await expect(page).toHaveURL('https://www.redmine.org/projects/redmine/wiki/Download');
  
    // Click User's Guide on sidebar
    await page.locator('//p/a[@class and @href="/projects/redmine/wiki/Guide"]').click();
    await expect(page).toHaveURL('https://www.redmine.org/projects/redmine/wiki/Guide');
  
    // Click Developer's Guide on sidebar
    await page.locator('//p/a[@href="/projects/redmine/wiki/Developer_Guide"]').click();
    await expect(page).toHaveURL('https://www.redmine.org/projects/redmine/wiki/Developer_Guide');
  
    // Click ChangeLog on sidebar
    await page.locator('//p/a[@href="/projects/redmine/wiki/Changelog"]').click();
    await expect(page).toHaveURL('https://www.redmine.org/projects/redmine/wiki/Changelog');
  
    // Click Security
    await page.locator('//div/div/p/a[@href="/projects/redmine/wiki/Security_Advisories" and text()="Security"]').click();
    await expect(page).toHaveURL('https://www.redmine.org/projects/redmine/wiki/Security_Advisories');
  
    // Click FAQ
    await page.locator('//p/a[@href="/projects/redmine/wiki/FAQ"]').click();
    await expect(page).toHaveURL('https://www.redmine.org/projects/redmine/wiki/FAQ');
  
    // Click HowTo's on sidebar
    await page.locator('//p/a[@href="/projects/redmine/wiki/HowTos"]').click();
    await expect(page).toHaveURL('https://www.redmine.org/projects/redmine/wiki/HowTos');
  
    // Click Plugins on sidebar
    await page.locator('//p/a[@href="/plugins"]').click();
    await expect(page).toHaveURL('https://www.redmine.org/plugins');
  
    // Go to https://www.redmine.org/projects/redmine/wiki/HowTos
    await page.goto('https://www.redmine.org/projects/redmine/wiki/HowTos');
  
    // Click Themes on sidebar
    await page.locator('//p/a[@href="/projects/redmine/wiki/Theme_List" ]').click();
    await expect(page).toHaveURL('https://www.redmine.org/projects/redmine/wiki/Theme_List');
  
    // Click Privacy Policy on sidebar
    await page.locator('//p/a[@href="/projects/redmine/wiki/PrivacyPolicy"]').click();
    await expect(page).toHaveURL('https://www.redmine.org/projects/redmine/wiki/PrivacyPolicy');
  
  
  });
  test('Main-menu Test', async ({ page }) => {
    // Go to https://www.redmine.org/
    await page.goto('https://www.redmine.org/');

    // Click Обзор
    await page.locator('.overview').click();
    await expect(page).toHaveURL('https://www.redmine.org/projects/redmine');
    // Check that leftcontent and rightcontent to be visible
    const leftcontent  = page.locator(".splitcontentleft")
    await expect(leftcontent).toBeVisible();
    const rightcontent  = page.locator(".splitcontentright")
    await expect(rightcontent).toBeVisible();

    // Click Download
    await page.locator('.download').click();
    await expect(page).toHaveURL('https://www.redmine.org/projects/redmine/wiki/Download');

    //Check visibility of download version
    const wikicontent  = page.locator("div.wiki.wiki-page")
    await expect(wikicontent).toBeVisible();

    // Click Действия
    await page.locator('.activity').click();
    await expect(page).toHaveURL('https://www.redmine.org/projects/redmine/activity');
    //Check visibility of Activity 
    const activity  = page.locator("#activity")
    await expect(activity).toBeVisible();

    // Click Оперативный план
    await page.locator('.roadmap').click();
    await expect(page).toHaveURL('https://www.redmine.org/projects/redmine/roadmap');
    //Check roadmap visibility
    const roadmap  = page.locator("#roadmap")
    await expect(roadmap).toBeVisible();

    // Click Задачи
    await page.locator('.issues').click();
    await expect(page).toHaveURL('https://www.redmine.org/projects/redmine/issues');
    //Check Issues visibility
    const autoscroll  = page.locator(".autoscroll")
    await expect(autoscroll).toBeVisible();
    // Click Новости
    await page.locator('.news').click();
    await expect(page).toHaveURL('https://www.redmine.org/projects/redmine/news');
    //Check News tab visibility
    const newscontent  = page.locator("#content")
    await expect(newscontent).toBeVisible();
    // Click "Wiki" page visibility
    await page.locator('a.wiki').click();
    await expect(page).toHaveURL('https://www.redmine.org/projects/redmine/wiki');
    //Check wiki page visibility
    const wikipage  = page.locator("div.wiki.wiki-page")
    await expect(wikipage).toBeVisible();
    // Click Форумы
    await page.locator('.boards').click();
    await expect(page).toHaveURL('https://www.redmine.org/projects/redmine/boards');
    //Check Forum board visibility
    const boards  = page.locator("table.list.boards")
    await expect(boards).toBeVisible();
    // Click Хранилище
    await page.locator('.repository').click();
    await expect(page).toHaveURL('https://www.redmine.org/projects/redmine/repository');
    //Check 'root' visibility
    const root  = page.locator("#browser")
    await expect(root).toBeVisible();
    //check Last reductions visibility
    const lastchanges  = page.locator("table.list.changesets")
    await expect(lastchanges).toBeVisible();

  });
    test('Sign In test', async ({ page }) => {
    // Go to https://www.redmine.org/
    await page.goto('https://www.redmine.org/');
    // Click Войти
    await page.locator('.login').click();
    await expect(page).toHaveURL('https://www.redmine.org/login');
    // Enter wrong username
    await page.locator('#username').click();
    await page.locator('#username').fill('fasdfxzc');
    // Enter wrong password
    await page.locator('#password').click();
    await page.locator('#password').fill('adfadfsadsf');
    // Click on "Оставаться в системе"
    await page.locator('#autologin').click();
    await page.locator('input[type="submit"]').click();
    // Expect flash error with text "Wrong credentials"
    await expect(page).toHaveURL('https://www.redmine.org/login');
    const FlashErrorWrongCredentials = page.locator('//div[@class="flash error" and contains (text(), Неправильное)]');
    // Check Flash error visibility
    await expect(FlashErrorWrongCredentials).toBeVisible();
    // Enter correct username
    await page.locator('#username').click();
    await page.locator('#username').fill('Redded');

    // Enter correct password
    await page.locator('#password').click();
    await page.locator('#password').fill('b!hvbr2dzrHJFMa');

    // Click on "Оставаться в системе"
    await page.locator('#autologin').click();
    // Click on "Вход" 
    await page.locator('input[type="submit"]').click();
    //check correct of url
    await expect(page).toHaveURL('https://www.redmine.org/login');
    // Expect flash text
    const FlashErrorNotActiveAccount = page.locator('//div[@class="flash error" and contains (text(), Вы_пока_не_имее)]');
    await expect(FlashErrorNotActiveAccount).toBeVisible();
  });
  
});