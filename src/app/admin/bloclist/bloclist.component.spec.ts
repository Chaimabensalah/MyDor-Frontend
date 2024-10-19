import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BloclistComponent } from './bloclist.component';

describe('BloclistComponent', () => {
  let component: BloclistComponent;
  let fixture: ComponentFixture<BloclistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BloclistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BloclistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
