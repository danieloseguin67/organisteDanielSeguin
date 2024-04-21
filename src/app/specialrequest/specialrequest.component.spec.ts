import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialrequestComponent } from './specialrequest.component';

describe('SpecialrequestComponent', () => {
  let component: SpecialrequestComponent;
  let fixture: ComponentFixture<SpecialrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialrequestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SpecialrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
