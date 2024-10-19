import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmerReservationRoomComponent } from './confirmer-reservation-room.component';

describe('ConfirmerReservationRoomComponent', () => {
  let component: ConfirmerReservationRoomComponent;
  let fixture: ComponentFixture<ConfirmerReservationRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmerReservationRoomComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConfirmerReservationRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
