import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-editfoyerdetailsdialog',
  standalone: true,
  imports: [],
  templateUrl: './editfoyerdetailsdialog.component.html',
  styleUrl: './editfoyerdetailsdialog.component.css'
})
export class EditfoyerdetailsdialogComponent {
  constructor(public dialog: MatDialog,public dialogRef: MatDialogRef<EditfoyerdetailsdialogComponent>) {}

  closeDialog(): void {
    this.dialogRef.close();
  }
}
