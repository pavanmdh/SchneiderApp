import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsBomComponent } from './documents-bom.component';

describe('DocumentsBomComponent', () => {
  let component: DocumentsBomComponent;
  let fixture: ComponentFixture<DocumentsBomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentsBomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentsBomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
