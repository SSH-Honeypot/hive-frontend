import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Weblog } from './weblog';

describe('Weblog', () => {
  let component: Weblog;
  let fixture: ComponentFixture<Weblog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Weblog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Weblog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
