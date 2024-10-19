import { Component } from '@angular/core';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-dormitories-dialog',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './add-dormitories-dialog.component.html',
  styleUrl: './add-dormitories-dialog.component.css'
})
export class AddDormitoriesDialogComponent {
  constructor(public dialog: MatDialog,public dialogRef: MatDialogRef<AddDormitoriesDialogComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
