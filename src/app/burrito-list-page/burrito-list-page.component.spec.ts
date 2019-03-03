import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BurritoListPageComponent } from './burrito-list-page.component';

describe('BurritoListPageComponent', () => {
  let component: BurritoListPageComponent;
  let fixture: ComponentFixture<BurritoListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BurritoListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BurritoListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
