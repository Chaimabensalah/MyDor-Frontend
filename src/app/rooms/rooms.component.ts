import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddDormitoriesDialogComponent } from '../add-dormitories-dialog/add-dormitories-dialog.component';
import { ConfirmerReservationRoomComponent } from '../confirmer-reservation-room/confirmer-reservation-room.component';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent {
  constructor(public dialog: MatDialog, public dialogRef:MatDialog,private fb: FormBuilder, ) {}


  openDialog() {
    this.dialog.open(ConfirmerReservationRoomComponent);
  }
}
