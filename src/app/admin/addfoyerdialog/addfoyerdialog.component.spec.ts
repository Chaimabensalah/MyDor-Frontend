import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfoyerdialogComponent } from './addfoyerdialog.component';

describe('AddfoyerdialogComponent', () => {
  let component: AddfoyerdialogComponent;
  let fixture: ComponentFixture<AddfoyerdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddfoyerdialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddfoyerdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
