import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentsCommunicationComponent } from './documents-communication.component';

describe('DocumentsCommunicationComponent', () => {
  let component: DocumentsCommunicationComponent;
  let fixture: ComponentFixture<DocumentsCommunicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentsCommunicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentsCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
