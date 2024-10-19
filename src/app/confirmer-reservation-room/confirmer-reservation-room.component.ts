import { Component } from '@angular/core';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { AddDormitoriesDialogComponent } from '../add-dormitories-dialog/add-dormitories-dialog.component';

@Component({
  selector: 'app-confirmer-reservation-room',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './confirmer-reservation-room.component.html',
  styleUrl: './confirmer-reservation-room.component.css'
})
export class ConfirmerReservationRoomComponent {
  constructor(public dialog: MatDialog,public dialogRef: MatDialogRef<ConfirmerReservationRoomComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
