import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddblocdialogComponent } from './addblocdialog.component';

describe('AddblocdialogComponent', () => {
  let component: AddblocdialogComponent;
  let fixture: ComponentFixture<AddblocdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddblocdialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddblocdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
