import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-addblocdialog',
  standalone: true,
  imports: [],
  templateUrl: './addblocdialog.component.html',
  styleUrl: './addblocdialog.component.css'
})
export class AddblocdialogComponent {
  constructor(public dialog: MatDialog,public dialogRef: MatDialogRef<AddblocdialogComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
