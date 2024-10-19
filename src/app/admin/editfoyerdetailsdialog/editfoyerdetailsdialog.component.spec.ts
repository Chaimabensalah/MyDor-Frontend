import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditfoyerdetailsdialogComponent } from './editfoyerdetailsdialog.component';

describe('EditfoyerdetailsdialogComponent', () => {
  let component: EditfoyerdetailsdialogComponent;
  let fixture: ComponentFixture<EditfoyerdetailsdialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditfoyerdetailsdialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditfoyerdetailsdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
