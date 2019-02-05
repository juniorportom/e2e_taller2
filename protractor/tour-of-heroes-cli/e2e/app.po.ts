import {browser, by, element, ElementFinder} from 'protractor';
import { SystemJsNgModuleLoader } from '@angular/core';

export class TourOfHeroesPage {
  navigateTo() {
    return browser.get('/');
  }

  getTop4Heroes() {
    return element.all(by.css('.module.hero')).all(by.tagName('h4')).getText();
  }

  navigateToHeroes() {
    element(by.linkText('Heroes')).click();
  }

  navigateToDashboard() {
    element(by.linkText('Dashboard')).click();
    browser.driver.sleep(3000);
  }

  getAllHeroes() {
    return element(by.tagName('my-heroes')).all(by.tagName('li'));
  }

  enterNewHeroInInput(newHero: string) {
    element(by.tagName('input')).sendKeys(newHero);
    element(by.buttonText('Add')).click();
  }

  findHero(hero: string) {
    element(by.id('search-box')).sendKeys(hero);
    return element(by.css('.search-result')).getText();
  }

  deleteHero(hero_delete: string) {
    const listHeros = this.getAllHeroes();

    listHeros.each(function(hero){
       hero.all(by.tagName('span')).get(1).getText().then(function(data){
        if (data === hero_delete) {
          hero.all(by.css('.delete')).click();
          browser.driver.sleep(1000);
        }
      });
    });
  }

  editHero(hero_change: string, new_name: string) {
    const listHeros = this.getAllHeroes();

    listHeros.each(function(hero){
       hero.all(by.tagName('span')).get(1).getText().then(function(data){
        if (data === hero_change) {
          hero.all(by.tagName('span')).get(1).click();
        }
      });
    });
    element(by.buttonText('View Details')).click();
    browser.driver.sleep(1000);
    element(by.tagName('input')).clear();
    element(by.tagName('input')).sendKeys(new_name);
    element(by.buttonText('Save')).click();
    browser.driver.sleep(1000);
  }

}
