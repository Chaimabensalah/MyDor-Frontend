import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDormitoriesDialogComponent } from './add-dormitories-dialog.component';

describe('AddDormitoriesDialogComponent', () => {
  let component: AddDormitoriesDialogComponent;
  let fixture: ComponentFixture<AddDormitoriesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddDormitoriesDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddDormitoriesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
