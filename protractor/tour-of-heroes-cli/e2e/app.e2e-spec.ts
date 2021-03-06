import { TourOfHeroesPage } from './app.po';

describe('Tour of heroes Dashboard', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage();
  });

  it('should display top 4 heroes', () => {
    page.navigateTo();
    expect(page.getTop4Heroes()).toEqual(['Mr. Nice', 'Narco', 'Bombasto', 'Celeritas']);
  });

  it('should navigate to heroes', () => {
    page.navigateToHeroes();
    expect(page.getAllHeroes().count()).toBe(11);
  });
});

describe('Tour of heroes, heroes page', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
    page.navigateToHeroes();
  });

  it('should add a new hero', () => {
    const currentHeroes = page.getAllHeroes().count();
    page.enterNewHeroInInput('My new Hero');
    expect(page.getAllHeroes().count()).toBe(currentHeroes.then(n => n + 1));
  });

});

describe('Buscar Heroe', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage();
  });

  it('Ir al dashboard', () => {
    page.navigateTo();
    expect(page.getTop4Heroes()).toEqual(['Mr. Nice', 'Narco', 'Bombasto', 'Celeritas']);
  });

  it('Buscar Bombasto', () => {
    expect(page.findHero('Bombasto')).toEqual('Bombasto');
  });
});

describe('Tour of heroes, elimiar heroe', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
    page.navigateToHeroes();
  });

  it('borrar heroe', () => {
    const currentHeroes = page.getAllHeroes().count();
    page.deleteHero('Magma');
    expect(page.getAllHeroes().count()).toBe(currentHeroes.then(n => n - 1));
  });
});


describe('Tour of heroes, editar heroe', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
    page.navigateToHeroes();
  });

  it('editar heroe', () => {
    page.editHero('Dynama', 'Reinaldo');
    page.navigateToDashboard();
    expect(page.findHero('Reinaldo')).toEqual('Reinaldo');
  });
});

describe('Tour of heroes, Navegar heroe desde dashboard', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
    page.navigateTo();
  });

  it('Navegar heroe desde dashboard', () => {
    page.goToHeroFromDashboard(2);
    expect(page.getHeroDetailText()).toEqual('Narco details!');
  });
});


describe('Tour of heroes, Navegar heroe desde la lista de heroes', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
    page.navigateToHeroes();
  });

  it('Navegar heroe desde la lista de heroes', () => {
    page.goToHeroFromList('Celeritas');
    expect(page.getHeroDetailText()).toEqual('Celeritas details!');
  });
});

describe('Tour of heroes, Navegar heroe desde la busqueda', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
    page.navigateTo();
  });

  it('Navegar heroe desde la busqueda', () => {
    page.goToHeroFromFind('Celeritas');
    expect(page.getHeroDetailText()).toEqual('Celeritas details!');
  });
});

