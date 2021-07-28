import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MMiallaComponent } from './mmialla.component';

describe('MMiallaComponent', () => {
  let component: MMiallaComponent;
  let fixture: ComponentFixture<MMiallaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MMiallaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MMiallaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
