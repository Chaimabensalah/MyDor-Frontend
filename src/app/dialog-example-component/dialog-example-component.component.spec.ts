import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogExampleComponentComponent } from './dialog-example-component.component';

describe('DialogExampleComponentComponent', () => {
  let component: DialogExampleComponentComponent;
  let fixture: ComponentFixture<DialogExampleComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogExampleComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogExampleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
