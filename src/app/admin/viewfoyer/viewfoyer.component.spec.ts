import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewfoyerComponent } from './viewfoyer.component';

describe('ViewfoyerComponent', () => {
  let component: ViewfoyerComponent;
  let fixture: ComponentFixture<ViewfoyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewfoyerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewfoyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
