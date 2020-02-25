import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlpviewComponent } from './slpview.component';

describe('SlpviewComponent', () => {
  let component: SlpviewComponent;
  let fixture: ComponentFixture<SlpviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlpviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlpviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
