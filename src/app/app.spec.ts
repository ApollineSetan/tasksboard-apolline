import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Router, Routes } from '@angular/router';

import { App } from './app';
import { Home } from './features/home/home';

const routes: Routes = [
  { path: '', component: Home }
];

describe('App', () => {
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        App,
        Home,
        RouterTestingModule.withRoutes(routes)
      ],
    }).compileComponents();

    router = TestBed.inject(Router);
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render Home content via router-outlet', async () => {
    const fixture = TestBed.createComponent(App);

    // 🔥 navigation manuelle
    await router.navigateByUrl('');
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const title = compiled.querySelector('h1');

    expect(title).toBeTruthy();
    expect(title?.textContent).toContain(
      "Bienvenue sur ce site d'une beauté inimitable"
    );
  });
});
