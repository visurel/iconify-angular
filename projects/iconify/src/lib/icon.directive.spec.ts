import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IconDirective } from './icon.directive';

@Component({
  template: `
    <ic-icon [icon]="data"></ic-icon>
    <div [icIcon]="data"></div>
  `,
})
class TestComponent {
  // @iconify/icons-ic/close
  data = {
    body: '<path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12z" fill="currentColor"/>',
    width: 24,
    height: 24,
  };
}

describe('IconDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.configureTestingModule({
      declarations: [
        TestComponent, IconDirective,
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).createComponent(TestComponent);
    component = fixture.componentInstance;
  }));

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('div should have children', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div').children.length).toBeGreaterThan(0);
  });

  it('ic-icon should have children', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('ic-icon').children.length).toBeGreaterThan(0);
  });
});
