import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconDirective } from './icon.directive';

describe('IconDirective', () => {
  let component: IconDirective;
  let fixture: ComponentFixture<IconDirective>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IconDirective]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconDirective);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
